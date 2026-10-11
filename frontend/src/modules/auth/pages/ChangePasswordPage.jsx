import { useState } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../../app/provider/useAuth";
import { ChangePasswordForm } from "../components/ChangePasswordForm";
import { changePassword } from "../services/changePassword";

const changedNotice = "Đổi mật khẩu thành công.";

export function ChangePasswordPage() {
  const { user } = useAuth();
  const [formKey, setFormKey] = useState(0);
  const [notice, setNotice] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(values) {
    setNotice("");
    setSubmitError("");
    setIsSubmitting(true);
    const result = await changePassword(
      user.email,
      values.currentPassword,
      values.newPassword,
    );
    setIsSubmitting(false);
    if (result.error) return setSubmitError(result.error);
    setNotice(changedNotice);
    setFormKey(formKey + 1);
  }

  return (
    <Card body className="mx-auto" style={{ maxWidth: 480 }}>
      <h2 className="h5 mb-3">Đổi mật khẩu</h2>
      <ChangePasswordForm
        key={formKey}
        onSubmit={handleSubmit}
        notice={notice}
        submitError={submitError}
        isSubmitting={isSubmitting}
      />
    </Card>
  );
}
