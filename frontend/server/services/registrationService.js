import { HttpError } from '../errors/HttpError.js'
import { toNewCustomer } from '../mappers/userMapper.js'
import { buildVerificationToken } from '../rules/verificationToken.js'
import {
  validateEmailBody, validateRegisterBody, validateVerifyEmailBody,
} from '../validation/requestValidators.js'
import { consumeToken } from './consumeToken.js'

const emailTakenMessage = 'Email này đã được đăng ký.'

export function createRegistrationService({ users, verificationTokens }) {
  function register(body) {
    validateRegisterBody(body)
    const customer = toNewCustomer(body)
    if (users.findByEmail(customer.email)) throw new HttpError(409, emailTakenMessage)
    const created = users.create(customer)
    verificationTokens.create(buildVerificationToken(created.id))
    return { email: created.email }
  }

  function verifyEmail(body) {
    validateVerifyEmailBody(body)
    const user = consumeToken({ users, tokens: verificationTokens }, body.email.trim(), body.code.trim())
    users.update(user.id, { emailVerified: true })
  }

  function resendVerification(body) {
    validateEmailBody(body)
    const user = users.findByEmail(body.email.trim())
    if (user && !user.emailVerified) verificationTokens.create(buildVerificationToken(user.id))
  }

  return { register, verifyEmail, resendVerification }
}
