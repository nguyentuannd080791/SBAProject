import { Outlet } from "react-router";
import { Container, Navbar } from "react-bootstrap";
import { UserMenu } from "./UserMenu";

export function MainLayout() {
  return (
    <>
      <Navbar bg="white" className="border-bottom">
        <Container>
          <Navbar.Brand href="/">Healthy Food</Navbar.Brand>
          <UserMenu />
        </Container>
      </Navbar>
      <Container as="main" className="py-4">
        <Outlet />
      </Container>
    </>
  );
}
