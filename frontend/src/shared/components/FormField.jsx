import { Form } from "react-bootstrap";

export function FormField({ label, name, error, hint, ...inputProps }) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control name={name} isInvalid={Boolean(error)} {...inputProps} />
      {hint && <Form.Text muted>{hint}</Form.Text>}
      <Form.Control.Feedback type="invalid" role="alert">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
