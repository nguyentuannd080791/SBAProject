import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Card } from "react-bootstrap";
import { RegisterForm } from "../components/RegisterForm";
import { registerUser } from "../services/registerUser";

export function RegisterPage() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(values) {
    setSubmitError("");
    setIsSubmitting(true);
    const result = await registerUser(values);
    setIsSubmitting(false);
    if (result.error) return setSubmitError(result.error);
    navigate("/verify-email", { state: { email: result.email } });
  }

  return (
    <Card body>
      <h2 className="h5 mb-3">Tạo tài khoản</h2>
      <RegisterForm
        onSubmit={handleSubmit}
        submitError={submitError}
        isSubmitting={isSubmitting}
      />
      <p className="mt-3 mb-0 text-center">
        Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </Card>
  );
}
