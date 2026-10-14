export function createAddressRepository(db) {
  const table = () => db.get('addresses')

  return {
    listByUserId(userId) {
      return table().filter({ userId }).value()
    },
    create(address) {
      return table().insert(address).write()
    },
    update(addressId, changes) {
      return table().updateById(addressId, changes).write()
    },
    remove(addressId) {
      table().removeById(addressId).write()
    },
  }
}
