export function createTokenRepository(db, collection) {
  const table = () => db.get(collection)

  return {
    create(token) {
      return table().insert(token).write()
    },
    findLatestByUserId(userId) {
      return table().filter({ userId }).last().value() ?? null
    },
    markUsed(tokenId) {
      table().updateById(tokenId, { used: true }).write()
    },
  }
}
