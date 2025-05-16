import { Component } from "react";
import { Container, Image, Alert } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Container fluid>
        <h4 className="my-4">{this.props.title}</h4>

        <Alert
          show={this.state.alert.isVisible}
          variant={this.state.alert.variant}
          dismissible
          onClose={() =>
            this.setState({
              alert: {
                isVisible: false,
                variant: "",
                title: "",
                content: "",
              },
            })
          }
        >
          <Alert.Heading>{this.state.alert.title}</Alert.Heading>
          <p>{this.state.alert.content}</p>
        </Alert>

        {this.state.alert.isVisible ? null : (
          <Slider {...sliderSettings}>
            {this.state.listaFilm.map((film) => (
              <div key={film.imdbID} className="px-1 text-center">
                <Image
                  src={film.Poster}
                  alt={film.Title}
                  fluid
                  style={{
                    aspectRatio: "2 / 3",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                />
              </div>
            ))}
          </Slider>
        )}
      </Container>
    );
  }
}

export default NetflixBody;
