import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function Movie({ movie }) {
  console.log(movie);

  return (
    <Col xs={6} md={4}>
      <br></br>
      <Image
        style={{ width: "80%", margin: "0 auto" }}
        src={movie.image}
        rounded
      />
      <Button variant="primary">Edit Movie</Button>
      <Button variant="danger">Delete Movie</Button>
    </Col>
  );
}
