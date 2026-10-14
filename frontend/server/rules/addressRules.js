const removeDefaultError = 'Không thể xóa địa chỉ mặc định. Hãy chọn địa chỉ mặc định khác trước.'

export function getRemoveRejection(addresses, address) {
  if (address.isDefault && addresses.length > 1) return removeDefaultError
  return ''
}

export function sortDefaultFirst(addresses) {
  return [...addresses].sort((first, second) => {
    if (first.isDefault !== second.isDefault) return first.isDefault ? -1 : 1
    return first.id - second.id
  })
}

export function findAddressById(addresses, addressId) {
  return addresses.find((address) => address.id === addressId) ?? null
}
