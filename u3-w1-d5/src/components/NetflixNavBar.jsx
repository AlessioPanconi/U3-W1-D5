import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Bell, Search, PersonCircle } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

function NetflixNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#221f1f" }} data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>
          <Image src={logo} alt="Netflix Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold active">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3 ms-lg-auto mt-3 mt-lg-0">
            <Search className="icons" />
            <div className="fw-bold" id="kids">
              KIDS
            </div>
            <Bell className="icons" />
            <PersonCircle className="icons" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNavbar;
