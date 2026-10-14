import { randomInt } from 'node:crypto'

const lifetimeInMinutes = 15

function randomSixDigitNumber() {
  return randomInt(0, 1000000)
}

export function buildVerificationToken(userId, now = new Date(), randomNumber = randomSixDigitNumber) {
  const code = String(randomNumber()).padStart(6, '0')
  const expiresAt = new Date(now.getTime() + lifetimeInMinutes * 60 * 1000)
  return { userId, code, expiresAt: expiresAt.toISOString(), used: false }
}

export function getCodeRejection(token, code, now) {
  if (!token) return 'Không tìm thấy mã xác thực. Vui lòng gửi lại mã.'
  if (token.used) return 'Mã xác thực đã được sử dụng.'
  if (new Date(token.expiresAt) <= now) return 'Mã xác thực đã hết hạn. Vui lòng gửi lại mã.'
  if (token.code !== code) return 'Mã xác thực không đúng.'
  return ''
}
