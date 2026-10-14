import { Badge, Button, ListGroup } from "react-bootstrap";
import { formatAddress } from "../utils/addressMapping";

export function AddressList({
  addresses,
  isBusy,
  onEdit,
  onRemove,
  onMakeDefault,
}) {
  return (
    <ListGroup>
      {addresses.map((address) => (
        <ListGroup.Item key={address.id}>
          <div className="d-flex justify-content-between flex-wrap gap-2">
            <div>
              <strong>{address.recipientName}</strong> ·{" "}
              {address.recipientPhone}
              {address.isDefault && (
                <Badge bg="primary" className="ms-2">
                  Mặc định
                </Badge>
              )}
              <div>{formatAddress(address)}</div>
            </div>
            <div className="d-flex flex-wrap gap-2 align-items-start">
              {!address.isDefault && (
                <Button
                  variant="outline-primary"
                  size="sm"
                  disabled={isBusy}
                  onClick={() => onMakeDefault(address)}
                >
                  Đặt làm mặc định
                </Button>
              )}
              <Button
                variant="outline-primary"
                size="sm"
                disabled={isBusy}
                onClick={() => onEdit(address)}
              >
                Sửa
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                disabled={isBusy}
                onClick={() => onRemove(address)}
              >
                Xóa
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
