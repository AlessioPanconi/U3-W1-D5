import { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class NetflixBody extends Component {
  state = {
    listaFilm: [],
  };

  fetchFilm = () => {
    fetch(`https://www.omdbapi.com/?s=${this.props.nome}&apikey=dbc1fa54`)
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nella fetch.");
        }
      })
      .then((listaFilm) => {
        console.log(listaFilm);
        this.setState({ listaFilm: listaFilm.Search });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchFilm();
  }

  render() {
    return (
      <Container fluid>
        <h4 className="my-4">{this.props.title}</h4>
        <Row xs={1} sm={2} md={3} xl={6} className="mb-4">
          {this.state.listaFilm.slice(0, 6).map((film) => (
            <Col key={film.imdbID} className="mb-2 text-center px-1">
              <Image
                src={film.Poster}
                alt={film.Title}
                fluid
                style={{
                  aspectRatio: "2 / 3",
                  objectFit: "cover",
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default NetflixBody;
