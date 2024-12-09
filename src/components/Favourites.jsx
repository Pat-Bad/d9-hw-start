import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const heartedJobs = useSelector((reduxState) => {
    return reduxState.favourites.content;
  });

  const dispatch = useDispatch();
  return (
    <Row>
      <Col
        xs={12}
        md={6}
      >
        <ul>
          {heartedJobs.map((job, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;
