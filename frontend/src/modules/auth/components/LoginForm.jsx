import { Alert, Button, Form } from "react-bootstrap";
import { FormField } from "../../../shared/components/FormField";
import { useForm } from "../../../shared/hooks/useForm";
import { validateLoginValues } from "../utils/validators";

const initialValues = { email: "", password: "" };

export function LoginForm({ onSubmit, notice, submitError, isSubmitting }) {
  const form = useForm(initialValues, validateLoginValues);

  function submitTrimmed(values) {
    onSubmit({ email: values.email.trim(), password: values.password });
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
        label="Mật khẩu"
        name="password"
        type="password"
        autoComplete="current-password"
        value={form.values.password}
        error={form.errors.password}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button type="submit" className="w-100 mt-2" disabled={isSubmitting}>
        {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
      </Button>
    </Form>
  );
}
