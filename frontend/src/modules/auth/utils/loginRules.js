export function getLoginRejection(user) {
  if (!user) return "Email hoặc mật khẩu không đúng.";
  if (user.status !== "active")
    return "Tài khoản đã bị khóa. Vui lòng liên hệ quản trị viên.";
  if (!user.emailVerified)
    return "Email chưa được xác thực. Vui lòng kiểm tra hộp thư.";
  return "";
}
