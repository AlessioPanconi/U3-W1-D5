import { Component } from "react";
import { Container, Row, Col, Image, Alert } from "react-bootstrap";

class NetflixBody extends Component {
  state = {
    listaFilm: [],
    alert: {
      isVisible: false,
      variant: "",
      title: "",
      content: "",
    },
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
        if (!listaFilm.Search || listaFilm.Search.length === 0) {
          console.log("Ricerca Fallita");
          this.setState({
            alert: {
              isVisible: true,
              variant: "danger",
              title: "Nessun risultato",
              content: "La ricerca non ha trovato nessun film con questo nome.",
            },
          });
          this.setState({ listaFilm: [] });
        } else {
          this.setState({
            alert: {
              isVisible: false,
              variant: "",
              title: "",
              content: "",
            },
          });
          this.setState({ listaFilm: listaFilm.Search });
        }
      })
      .catch((err) => {
        console.log("catch", err);
        this.setState({
          alert: {
            isVisible: true,
            variant: "danger",
            title: "Errore nella ricerca",
            content: err.message,
          },
        });
      });
  };

  componentDidMount() {
    this.fetchFilm();
  }

  render() {
    return (
      <Container fluid>
        <h4 className="my-4">{this.props.title}</h4>
        <Alert
          show={this.state.alert.isVisible}
          variant={this.state.alert.variant}
          dismissible
          onClose={() => {
            this.setState({
              alert: {
                isVisible: false,
                variant: "",
                title: "",
                content: "",
              },
            });
          }}
        >
          <Alert.Heading>{this.state.alert.title}</Alert.Heading>
          <p>{this.state.alert.content}</p>
        </Alert>

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
