import { Alert, Button, Form } from "react-bootstrap";
import { FormField } from "../../../shared/components/FormField";
import { useForm } from "../../../shared/hooks/useForm";
import { validateVerifyEmailValues } from "../utils/validators";

export function VerifyEmailForm({
  initialEmail,
  onSubmit,
  onResend,
  notice,
  submitError,
  isSubmitting,
}) {
  const form = useForm(
    { email: initialEmail, code: "" },
    validateVerifyEmailValues,
  );

  function submitTrimmed(values) {
    onSubmit({ email: values.email.trim(), code: values.code.trim() });
  }

  return (
    <Form noValidate onSubmit={form.handleSubmit(submitTrimmed)}>
      {notice && <Alert variant="success">{notice}</Alert>}
      {submitError && <Alert variant="danger">{submitError}</Alert>}

      <FormField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        value={form.values.email}
        error={form.errors.email}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Mã xác thực"
        name="code"
        inputMode="numeric"
        maxLength={6}
        autoComplete="one-time-code"
        hint="Nhập mã gồm 6 chữ số đã gửi tới email của bạn."
        value={form.values.code}
        error={form.errors.code}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button type="submit" className="w-100 mt-2" disabled={isSubmitting}>
        {isSubmitting ? "Đang xác thực..." : "Xác thực"}
      </Button>
      <Button
        type="button"
        variant="link"
        className="w-100 mt-2"
        disabled={isSubmitting}
        onClick={() => onResend(form.values.email.trim())}
      >
        Gửi lại mã
      </Button>
    </Form>
  );
}
