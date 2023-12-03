import { Card } from "react-bootstrap";

const Homes = ({ home }) => {
  return (
    <Card className="my-3">
      <a href={`/home/${home._id}`}>
        <Card.Img src={home.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/home/${home._id}`}>
          <Card.Title as="div">
            <strong>{home.address}</strong>
          </Card.Title>
        </a>
      </Card.Body>

      <Card.Text as="h3">${home.price}</Card.Text>
    </Card>
  );
};

export default Homes;
