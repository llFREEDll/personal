import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
            <Navbar variant="dark" className="bg-dark text-uppercase" expand="md">
                <Container className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Personal
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-link">Inicio</Link>
                            <Link to="/vista" className="nav-link">Vista de personal</Link>
                            <Link to="/ingreso" className="nav-link">Ingreso de personal</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar