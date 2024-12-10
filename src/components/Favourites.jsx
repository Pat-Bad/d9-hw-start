import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const heartedJobs = useSelector(
    (reduxState) => reduxState.favourites.content
  );

  return (
    <Row>
      <Col
        xs={12}
        md={6}
      >
        <ul>
          {heartedJobs.map(
            (data, i) => (
              console.log(heartedJobs),
              (
                <li key={i}>
                  <Link to={`/${data.company_name}`}>{heartedJobs[i]}</Link>
                </li>
              )
            )
          )}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;
