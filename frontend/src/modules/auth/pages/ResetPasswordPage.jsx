import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Card } from "react-bootstrap";
import { ResetPasswordForm } from "../components/ResetPasswordForm";
import { resetPassword } from "../services/resetPassword";

const requestedNotice =
  "Nếu email tồn tại trong hệ thống, mã đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra email.";
const resetNotice =
  "Đặt lại mật khẩu thành công. Bạn có thể đăng nhập bằng mật khẩu mới.";

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const email = useLocation().state?.email ?? "";
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(values) {
    setSubmitError("");
    setIsSubmitting(true);
    const result = await resetPassword(
      values.email,
      values.code,
      values.password,
    );
    setIsSubmitting(false);
    if (result.error) return setSubmitError(result.error);
    navigate("/login", { state: { notice: resetNotice } });
  }

  return (
    <Card body>
      <h2 className="h5 mb-3">Đặt lại mật khẩu</h2>
      <ResetPasswordForm
        initialEmail={email}
        onSubmit={handleSubmit}
        notice={email ? requestedNotice : ""}
        submitError={submitError}
        isSubmitting={isSubmitting}
      />
      <p className="mt-3 mb-0 text-center">
        <Link to="/forgot-password">Yêu cầu mã mới</Link>
      </p>
    </Card>
  );
}
