import { Container } from "react-bootstrap";
import "./App.css";
import NetflixFooter from "./components/NetflixFooter";
import NetflixNavbar from "./components/NetflixNavBar";
import NetflixHeader from "./components/NetflixHeader";
import NetflixBody from "./components/NetflixBody";

function App() {
  return (
    <>
      <NetflixNavbar />
      <Container fluid className="px-4">
        <NetflixHeader />
        <NetflixBody nome="Batman" title="Trending Now" />
        <NetflixBody nome="Avengers" title="Watch it Again" />
        <NetflixBody nome="Iron Man" title="New Releases" />
        <NetflixFooter />
      </Container>
    </>
  );
}

export default App;
