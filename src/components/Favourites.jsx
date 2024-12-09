import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const heartedJobs = useSelector(
    (reduxState) => reduxState.favourites.content
  );

  const dispatch = useDispatch();
  return (
    <Row>
      <Col
        xs={12}
        md={6}
      >
        <ul>
          {heartedJobs.map((job, i) => (
            <li key={i}>
              {" "}
              <Link to={`/${job.company_name}`}>{job}</Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;
