import { HttpError } from '../errors/HttpError.js'
import { buildVerificationToken } from '../rules/verificationToken.js'
import {
  validateChangePasswordBody, validateEmailBody, validateResetPasswordBody,
} from '../validation/requestValidators.js'
import { consumeToken } from './consumeToken.js'

const wrongCurrentPasswordMessage = 'Mật khẩu hiện tại không đúng.'

export function createPasswordService({ users, passwordResetTokens }) {
  function forgotPassword(body) {
    validateEmailBody(body)
    const user = users.findByEmail(body.email.trim())
    if (user) passwordResetTokens.create(buildVerificationToken(user.id))
  }

  function resetPassword(body) {
    validateResetPasswordBody(body)
    const tokens = passwordResetTokens
    const user = consumeToken({ users, tokens }, body.email.trim(), body.code.trim())
    users.update(user.id, { password: body.password })
  }

  function changePassword(user, body) {
    validateChangePasswordBody(body)
    if (user.password !== body.currentPassword) throw new HttpError(400, wrongCurrentPasswordMessage)
    users.update(user.id, { password: body.newPassword })
  }

  return { forgotPassword, resetPassword, changePassword }
}
