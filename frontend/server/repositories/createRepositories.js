import { createAddressRepository } from './addressRepository.js'
import { createSessionRepository } from './sessionRepository.js'
import { createTokenRepository } from './tokenRepository.js'
import { createUserRepository } from './userRepository.js'

const collections = ['users', 'sessions', 'verificationTokens', 'passwordResetTokens', 'addresses']

function ensureCollections(db) {
  for (const name of collections) {
    if (!db.has(name).value()) db.set(name, []).write()
  }
}

export function createRepositories(db) {
  ensureCollections(db)
  return {
    users: createUserRepository(db),
    sessions: createSessionRepository(db),
    verificationTokens: createTokenRepository(db, 'verificationTokens'),
    passwordResetTokens: createTokenRepository(db, 'passwordResetTokens'),
    addresses: createAddressRepository(db),
  }
}
