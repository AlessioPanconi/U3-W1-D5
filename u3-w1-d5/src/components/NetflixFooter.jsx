import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

const NetflixFooter = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={10} lg={8}>
            <Row>
              <Col className="mb-2">
                <Facebook className="footer-icon me-2" />
                <Instagram className="footer-icon me-2" />
                <TwitterX className="footer-icon me-2" />
                <Youtube className="footer-icon" />
              </Col>
            </Row>

            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2">
                <Button variant="outline-secondary" className="footer-button rounded-0 mt-3" size="sm">
                  Service Code
                </Button>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default NetflixFooter;
