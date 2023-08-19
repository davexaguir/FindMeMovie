import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function MovieInfo() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { movie } = state;

  const handleHomeClick = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div className="infoPage">
      <h2>Movie Name: {movie.movie_name}</h2>
      <h3>Genre: {movie.genre}</h3>
      <h3>Main Actor: {movie.main_actor}</h3>
      <Button variant="primary" onClick={handleHomeClick}>
        Home
      </Button>
    </div>
  );
}
