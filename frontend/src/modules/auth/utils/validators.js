const emailPattern = /^\S+@\S+\.\S+$/;
const phonePattern = /^0\d{9}$/;
const codePattern = /^\d{6}$/;

function collectErrors(messagesByField) {
  const errors = {};
  for (const [field, message] of Object.entries(messagesByField)) {
    if (message) errors[field] = message;
  }
  return errors;
}

export function validateEmail(value) {
  const email = value.trim();
  if (!email) return "Vui lòng nhập email.";
  if (!emailPattern.test(email)) return "Email không hợp lệ.";
  return "";
}

export function validateLoginPassword(value) {
  if (!value) return "Vui lòng nhập mật khẩu.";
  return "";
}

export function validateFullName(value) {
  if (!value.trim()) return "Vui lòng nhập họ và tên.";
  return "";
}

export function validatePhone(value) {
  if (!value.trim()) return "Vui lòng nhập số điện thoại.";
  if (!phonePattern.test(value.trim()))
    return "Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0.";
  return "";
}

export function validateNewPassword(value) {
  if (!value) return "Vui lòng nhập mật khẩu.";
  if (value.length < 8) return "Mật khẩu phải có ít nhất 8 ký tự.";
  if (!/[A-Za-z]/.test(value) || !/\d/.test(value))
    return "Mật khẩu phải gồm cả chữ và số.";
  return "";
}

export function validatePasswordConfirmation(password, confirmation) {
  if (!confirmation) return "Vui lòng nhập lại mật khẩu.";
  if (confirmation !== password) return "Mật khẩu nhập lại không khớp.";
  return "";
}

export function validateVerificationCode(value) {
  if (!value.trim()) return "Vui lòng nhập mã xác thực.";
  if (!codePattern.test(value.trim())) return "Mã xác thực gồm 6 chữ số.";
  return "";
}

export function validateLoginValues(values) {
  return collectErrors({
    email: validateEmail(values.email),
    password: validateLoginPassword(values.password),
  });
}

export function validateRegisterValues(values) {
  return collectErrors({
    fullName: validateFullName(values.fullName),
    email: validateEmail(values.email),
    phone: validatePhone(values.phone),
    password: validateNewPassword(values.password),
    confirmPassword: validatePasswordConfirmation(
      values.password,
      values.confirmPassword,
    ),
  });
}

export function validateVerifyEmailValues(values) {
  return collectErrors({
    email: validateEmail(values.email),
    code: validateVerificationCode(values.code),
  });
}
