import { Alert, Button, Form } from "react-bootstrap";
import { FormField } from "../../../shared/components/FormField";
import { useForm } from "../../../shared/hooks/useForm";
import { validateProfileValues } from "../utils/validators";

export function ProfileForm({
  profile,
  onSubmit,
  onCancel,
  submitError,
  isSubmitting,
}) {
  const initialValues = { fullName: profile.fullName, phone: profile.phone };
  const form = useForm(initialValues, validateProfileValues);

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
        disabled
        hint="Email dùng để đăng nhập nên không thể thay đổi."
        value={profile.email}
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

      <div className="d-flex gap-2 mt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang lưu..." : "Lưu thay đổi"}
        </Button>
        <Button
          type="button"
          variant="outline-secondary"
          disabled={isSubmitting}
          onClick={onCancel}
        >
          Hủy
        </Button>
      </div>
    </Form>
  );
}
