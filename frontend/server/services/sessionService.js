import { HttpError } from '../errors/HttpError.js'
import { toSessionUser } from '../mappers/userMapper.js'
import { validateLoginBody } from '../validation/requestValidators.js'

const invalidCredentialsMessage = 'Email hoặc mật khẩu không đúng.'
const lockedMessage = 'Tài khoản đã bị khóa. Vui lòng liên hệ quản trị viên.'
const unverifiedMessage = 'Email chưa được xác thực. Vui lòng kiểm tra hộp thư.'

export function createSessionService({ users, sessions }) {
  function login(body) {
    validateLoginBody(body)
    const user = users.findByEmail(body.email.trim())
    if (!user || user.password !== body.password) throw new HttpError(401, invalidCredentialsMessage)
    if (user.status !== 'active') throw new HttpError(403, lockedMessage)
    if (!user.emailVerified) throw new HttpError(403, unverifiedMessage)
    const session = sessions.create(user.id)
    return { user: toSessionUser(user), token: session.token }
  }

  function logout(token) {
    sessions.remove(token)
  }

  function authenticate(token) {
    const session = sessions.findByToken(token)
    const user = session ? users.findById(session.userId) : null
    return user && user.status === 'active' ? user : null
  }

  return { login, logout, authenticate }
}
