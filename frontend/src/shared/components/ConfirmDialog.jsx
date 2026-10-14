import { Button, Modal } from "react-bootstrap";

export function ConfirmDialog({
  show,
  title,
  message,
  confirmLabel,
  isBusy,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h2" className="h5">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-secondary"
          disabled={isBusy}
          onClick={onCancel}
        >
          Hủy
        </Button>
        <Button variant="danger" disabled={isBusy} onClick={onConfirm}>
          {confirmLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
