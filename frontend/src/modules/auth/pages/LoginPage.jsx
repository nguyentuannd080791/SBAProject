import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Card } from "react-bootstrap";
import { useAuth } from "../../../app/provider/useAuth";
import { LoginForm } from "../components/LoginForm";
import { loginUser } from "../services/loginUser";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit({ email, password }) {
    setSubmitError("");
    setIsSubmitting(true);
    const result = await loginUser(email, password);
    setIsSubmitting(false);
    if (result.error) return setSubmitError(result.error);
    login(result.user);
    navigate("/", { replace: true });
  }

  return (
    <Card body>
      <h2 className="h5 mb-3">Đăng nhập</h2>
      <LoginForm
        onSubmit={handleSubmit}
        notice={location.state?.notice}
        submitError={submitError}
        isSubmitting={isSubmitting}
      />
      <p className="mt-3 mb-0 text-center">
        <Link to="/forgot-password">Quên mật khẩu?</Link>
      </p>
      <p className="mt-1 mb-0 text-center">
        Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
      </p>
      <p className="mt-1 mb-0 text-center">
        <Link to="/verify-email">Xác thực email</Link>
      </p>
    </Card>
  );
}
