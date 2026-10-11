import { Alert, Button, Form } from "react-bootstrap";
import { FormField } from "../../../shared/components/FormField";
import { useForm } from "../../../shared/hooks/useForm";
import { validateChangePasswordValues } from "../utils/validators";

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export function ChangePasswordForm({
  onSubmit,
  notice,
  submitError,
  isSubmitting,
}) {
  const form = useForm(initialValues, validateChangePasswordValues);

  return (
    <Form noValidate onSubmit={form.handleSubmit(onSubmit)}>
      {notice && <Alert variant="success">{notice}</Alert>}
      {submitError && <Alert variant="danger">{submitError}</Alert>}

      <FormField
        label="Mật khẩu hiện tại"
        name="currentPassword"
        type="password"
        autoComplete="current-password"
        value={form.values.currentPassword}
        error={form.errors.currentPassword}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Mật khẩu mới"
        name="newPassword"
        type="password"
        autoComplete="new-password"
        hint="Ít nhất 8 ký tự, gồm cả chữ và số."
        value={form.values.newPassword}
        error={form.errors.newPassword}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Nhập lại mật khẩu mới"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        value={form.values.confirmPassword}
        error={form.errors.confirmPassword}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button type="submit" className="w-100 mt-2" disabled={isSubmitting}>
        {isSubmitting ? "Đang đổi..." : "Đổi mật khẩu"}
      </Button>
    </Form>
  );
}
