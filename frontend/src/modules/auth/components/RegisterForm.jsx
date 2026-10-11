import { Alert, Button, Form } from "react-bootstrap";
import { FormField } from "../../../shared/components/FormField";
import { useForm } from "../../../shared/hooks/useForm";
import { validateRegisterValues } from "../utils/validators";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export function RegisterForm({ onSubmit, submitError, isSubmitting }) {
  const form = useForm(initialValues, validateRegisterValues);

  return (
    <Form noValidate onSubmit={form.handleSubmit(onSubmit)}>
      {submitError && <Alert variant="danger">{submitError}</Alert>}

      <FormField
        label="Họ và tên"
        name="fullName"
        autoComplete="name"
        value={form.values.fullName}
        error={form.errors.fullName}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
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
        label="Số điện thoại"
        name="phone"
        type="tel"
        autoComplete="tel"
        value={form.values.phone}
        error={form.errors.phone}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Mật khẩu"
        name="password"
        type="password"
        autoComplete="new-password"
        hint="Ít nhất 8 ký tự, gồm cả chữ và số."
        value={form.values.password}
        error={form.errors.password}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <FormField
        label="Nhập lại mật khẩu"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        value={form.values.confirmPassword}
        error={form.errors.confirmPassword}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button type="submit" className="w-100 mt-2" disabled={isSubmitting}>
        {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
      </Button>
    </Form>
  );
}
