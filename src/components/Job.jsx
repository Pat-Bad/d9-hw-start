import { Row, Col, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavourites } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          <Button
            className="d-flex align-items-center"
            variant="success"
            onClick={() => {
              dispatch(addToFavourites(data.company_name));
            }}
          >
            Add to favourites
          </Button>
        </Col>
        <Col xs={9}>
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
          >
            {data.title}
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="ms-5">
          <Link to="/favourites">Favourites</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Job;
