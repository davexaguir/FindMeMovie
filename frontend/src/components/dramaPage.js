import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import NavBar from "./NavBar";
import { response } from "express";

export default function Drama() {
  //const [movies, setMovies ] =useState([])

  //Option 1
  //add function to get all movies
  //request to fetch movies
  //loop through the response and push the movie with the genre of drama into dramaMovies array
  //console.log( 'movies', movies ) => should display all the dramaMovies

  //Option 2
  //if you can create a new request to get all movies by genre yay
  //dramaMovies.push(resp)
  //console.log( 'movies', movies) => should display all the dramaMovies

  //useEffect that will call the fetch movies request as soon as the page loads

  return (
    <>
      <NavBar />
      <div className="dramaPage">
        <div className="dramaHeader">
          <Container>
            <h1>The Movie Page</h1>
          </Container>
        </div>
      </div>
    </>
  );
}
