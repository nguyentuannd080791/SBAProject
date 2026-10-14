import { randomUUID } from 'node:crypto'

export function createSessionRepository(db) {
  const table = () => db.get('sessions')

  return {
    create(userId) {
      const session = { token: randomUUID(), userId, createdAt: new Date().toISOString() }
      return table().insert(session).write()
    },
    findByToken(token) {
      return table().find({ token }).value() ?? null
    },
    remove(token) {
      table().remove({ token }).write()
    },
  }
}
