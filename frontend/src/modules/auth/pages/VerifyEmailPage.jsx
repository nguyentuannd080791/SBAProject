import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Card } from "react-bootstrap";
import { VerifyEmailForm } from "../components/VerifyEmailForm";
import { resendVerification } from "../services/resendVerification";
import { verifyEmail } from "../services/verifyEmail";
import { validateEmail } from "../utils/validators";

const registeredNotice =
  "Đăng ký thành công. Vui lòng nhập mã xác thực đã gửi tới email của bạn.";
const resentNotice =
  "Nếu email này cần xác thực, mã mới đã được gửi. Vui lòng kiểm tra email.";
const verifiedNotice = "Xác thực email thành công. Bạn có thể đăng nhập.";

export function VerifyEmailPage() {
  const navigate = useNavigate();
  const email = useLocation().state?.email ?? "";
  const [notice, setNotice] = useState(email ? registeredNotice : "");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(values) {
    setNotice("");
    setSubmitError("");
    setIsSubmitting(true);
    const result = await verifyEmail(values.email, values.code);
    setIsSubmitting(false);
    if (result.error) return setSubmitError(result.error);
    navigate("/login", { state: { notice: verifiedNotice } });
  }

  async function handleResend(emailToResend) {
    const emailError = validateEmail(emailToResend);
    setNotice("");
    setSubmitError(emailError);
    if (emailError) return;
    setIsSubmitting(true);
    const result = await resendVerification(emailToResend);
    setIsSubmitting(false);
    if (result.error) return setSubmitError(result.error);
    setNotice(resentNotice);
  }

  return (
    <Card body>
      <h2 className="h5 mb-3">Xác thực email</h2>
      <VerifyEmailForm
        initialEmail={email}
        onSubmit={handleSubmit}
        onResend={handleResend}
        notice={notice}
        submitError={submitError}
        isSubmitting={isSubmitting}
      />
      <p className="mt-3 mb-0 text-center">
        <Link to="/login">Quay lại đăng nhập</Link>
      </p>
    </Card>
  );
}
