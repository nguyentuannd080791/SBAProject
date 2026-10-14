const emailPattern = /^\S+@\S+\.\S+$/
const phonePattern = /^0\d{9}$/
const codePattern = /^\d{6}$/

export function toText(value) {
  return typeof value === 'string' ? value : ''
}

export function validateRequired(value, message) {
  return value.trim() ? '' : message
}

export function validateEmail(value) {
  const email = value.trim()
  if (!email) return 'Vui lòng nhập email.'
  if (!emailPattern.test(email)) return 'Email không hợp lệ.'
  return ''
}

export function validateFullName(value) {
  return validateRequired(value, 'Vui lòng nhập họ và tên.')
}

export function validatePhone(value) {
  if (!value.trim()) return 'Vui lòng nhập số điện thoại.'
  if (!phonePattern.test(value.trim())) return 'Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0.'
  return ''
}

export function validateNewPassword(value) {
  if (!value) return 'Vui lòng nhập mật khẩu.'
  if (value.length < 8) return 'Mật khẩu phải có ít nhất 8 ký tự.'
  if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) return 'Mật khẩu phải gồm cả chữ và số.'
  return ''
}

export function validateChangedPassword(currentPassword, newPassword) {
  const error = validateNewPassword(newPassword)
  if (error) return error
  if (newPassword === currentPassword) return 'Mật khẩu mới phải khác mật khẩu hiện tại.'
  return ''
}

export function validateVerificationCode(value) {
  if (!value.trim()) return 'Vui lòng nhập mã xác thực.'
  if (!codePattern.test(value.trim())) return 'Mã xác thực gồm 6 chữ số.'
  return ''
}
