import Dropdown from "react-bootstrap/Dropdown";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const NetflixHeader = () => {
  return (
    <div className="d-flex justify-content-between mt-3">
      <div className="d-flex">
        <h2 className="mb-4">TV Shows</h2>
        <Dropdown className=" ms-4 mt-1">
          <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Grid className="icons" />
        <Grid3x3 className="icons" />
      </div>
    </div>
  );
};

export default NetflixHeader;
