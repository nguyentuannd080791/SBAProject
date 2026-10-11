import { Link, useNavigate } from "react-router";
import { Button, Nav } from "react-bootstrap";
import { useAuth } from "../provider/useAuth";

export function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  if (!user) {
    return (
      <Nav.Link as={Link} to="/login">
        Đăng nhập
      </Nav.Link>
    );
  }

  return (
    <div className="d-flex align-items-center gap-3">
      <span>{user.fullName}</span>
      <Link to="/change-password">Đổi mật khẩu</Link>
      <Button variant="outline-primary" size="sm" onClick={handleLogout}>
        Đăng xuất
      </Button>
    </div>
  );
}
