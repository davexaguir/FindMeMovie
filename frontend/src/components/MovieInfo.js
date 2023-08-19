import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function MovieInfo() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id, name } = state;

  const handleHomeClick = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <>
      <h2>Movie Details - Name: {name}</h2>
      <Button variant="primary" onClick={handleHomeClick}>
        Home
      </Button>
    </>
  );
}
