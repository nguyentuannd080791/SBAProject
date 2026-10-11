import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { validateLoginValues } from "../utils/validators";

export function LoginForm({ onSubmit, submitError, isSubmitting }) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleBlur(event) {
    const { name } = event.target;
    setErrors({ ...errors, [name]: validateLoginValues(values)[name] });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const foundErrors = validateLoginValues(values);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;
    onSubmit({ email: values.email.trim(), password: values.password });
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      {submitError && <Alert variant="danger">{submitError}</Alert>}

      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          isInvalid={Boolean(errors.email)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Control.Feedback type="invalid" role="alert">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="loginPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          name="password"
          autoComplete="current-password"
          value={values.password}
          isInvalid={Boolean(errors.password)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Control.Feedback type="invalid" role="alert">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" className="w-100" disabled={isSubmitting}>
        {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
      </Button>
    </Form>
  );
}
