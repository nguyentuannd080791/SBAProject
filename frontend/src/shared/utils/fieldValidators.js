const phonePattern = /^0\d{9}$/;

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
