import { Outlet } from "react-router";
import { Col, Container, Row } from "react-bootstrap";

export function AuthLayout() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={5}>
          <h1 className="h3 text-center mb-4">Healthy Food</h1>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
