import Movie from "./Movie";
import Container from "react-bootstrap/Container";
import NavBar from "./NavBar";
import Row from "react-bootstrap/Row";

import React, { useState, useEffect } from "react";

export default function Comedy() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:3003/movies?genre=Comedy"
        );
        const jsonData = await response.json();
        setMovies(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <NavBar />
      <div className="comedyList">
        <div className="comedyHeader">
          <Container>
            <Row>
              {movies.map((movie) => {
                return <Movie key={movie._id} movie={movie} />;
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
