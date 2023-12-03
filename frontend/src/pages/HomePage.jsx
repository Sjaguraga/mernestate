import { Row, Col } from "react-bootstrap";
import Homes from "../components/Homes";
import homes from "../homes";

const HomePage = () => {
  return (
    <>
      <h1>View Homes</h1>
      <Row>
        {homes.map((home) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Homes home={home} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
