import { HttpError } from '../errors/HttpError.js'
import { getCodeRejection } from '../rules/verificationToken.js'

export function consumeToken({ users, tokens }, email, code) {
  const user = users.findByEmail(email)
  const token = user ? tokens.findLatestByUserId(user.id) : null
  const rejection = getCodeRejection(token, code, new Date())
  if (rejection) throw new HttpError(400, rejection)
  tokens.markUsed(token.id)
  return user
}
