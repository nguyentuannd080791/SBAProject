import { Alert, Button, Form } from "react-bootstrap";
import { FormField } from "../../../shared/components/FormField";
import { useForm } from "../../../shared/hooks/useForm";
import { validateForgotPasswordValues } from "../utils/validators";

export function ForgotPasswordForm({ onSubmit, submitError, isSubmitting }) {
  const form = useForm({ email: "" }, validateForgotPasswordValues);

  function submitTrimmed(values) {
    onSubmit({ email: values.email.trim() });
  }

  return (
    <Form noValidate onSubmit={form.handleSubmit(submitTrimmed)}>
      {submitError && <Alert variant="danger">{submitError}</Alert>}

      <FormField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        hint="Chúng tôi sẽ gửi mã đặt lại mật khẩu tới email này."
        value={form.values.email}
        error={form.errors.email}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button type="submit" className="w-100 mt-2" disabled={isSubmitting}>
        {isSubmitting ? "Đang gửi..." : "Gửi mã"}
      </Button>
    </Form>
  );
}
