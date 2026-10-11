const emailPattern = /^\S+@\S+\.\S+$/;

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

export function validateLoginValues(values) {
  const errors = {};
  const emailError = validateEmail(values.email);
  const passwordError = validateLoginPassword(values.password);
  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;
  return errors;
}
