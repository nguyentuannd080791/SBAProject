import { Outlet } from "react-router";
import { Container, Navbar } from "react-bootstrap";

export function MainLayout() {
  return (
    <>
      <Navbar bg="white" className="border-bottom">
        <Container>
          <Navbar.Brand href="/">Healthy Food</Navbar.Brand>
        </Container>
      </Navbar>
      <Container as="main" className="py-4">
        <Outlet />
      </Container>
    </>
  );
}
