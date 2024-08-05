import { Outlet } from "react-router-dom";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarComponent() {
  return (
    <>
    
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >ProShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>
                        
                        
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
        <main className="py-3">
            <Outlet />
        </main>
        <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">Copyright &copy; ProShop</Col>
            </Row>
        </Container>
    </footer>
    </>
  )
}