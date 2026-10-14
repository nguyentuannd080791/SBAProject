import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Card } from "react-bootstrap";
import { authApi } from "../api/authApi";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit({ email }) {
    setSubmitError("");
    setIsSubmitting(true);
    const result = await authApi.forgotPassword(email);
    setIsSubmitting(false);
    if (result.error) return setSubmitError(result.error);
    navigate("/reset-password", { state: { email } });
  }

  return (
    <Card body>
      <h2 className="h5 mb-3">Quên mật khẩu</h2>
      <ForgotPasswordForm
        onSubmit={handleSubmit}
        submitError={submitError}
        isSubmitting={isSubmitting}
      />
      <p className="mt-3 mb-0 text-center">
        <Link to="/login">Quay lại đăng nhập</Link>
      </p>
    </Card>
  );
}
