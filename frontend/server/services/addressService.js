import { HttpError } from '../errors/HttpError.js'
import { toAddressChanges, toNewAddress } from '../mappers/addressMapper.js'
import { findAddressById, getRemoveRejection, sortDefaultFirst } from '../rules/addressRules.js'
import { validateAddressBody } from '../validation/requestValidators.js'

const notFoundMessage = 'Không tìm thấy địa chỉ.'

export function createAddressService({ addresses }) {
  function findOwned(user, addressId) {
    const owned = addresses.listByUserId(user.id)
    const address = findAddressById(owned, addressId)
    if (!address) throw new HttpError(404, notFoundMessage)
    return { owned, address }
  }

  function list(user) {
    return sortDefaultFirst(addresses.listByUserId(user.id))
  }

  function add(user, body) {
    validateAddressBody(body)
    const isFirstAddress = addresses.listByUserId(user.id).length === 0
    return addresses.create(toNewAddress(user.id, body, isFirstAddress))
  }

  function update(user, addressId, body) {
    validateAddressBody(body)
    findOwned(user, addressId)
    return addresses.update(addressId, toAddressChanges(body))
  }

  function remove(user, addressId) {
    const { owned, address } = findOwned(user, addressId)
    const rejection = getRemoveRejection(owned, address)
    if (rejection) throw new HttpError(409, rejection)
    addresses.remove(addressId)
  }

  function setDefault(user, addressId) {
    const { owned } = findOwned(user, addressId)
    addresses.update(addressId, { isDefault: true })
    for (const address of owned) {
      if (address.isDefault && address.id !== addressId) addresses.update(address.id, { isDefault: false })
    }
  }

  return { list, add, update, remove, setDefault }
}
