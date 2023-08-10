import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/home';
import MovieDetails from './components/movie-details';
import MovieList from './components/movie-list';

function App() {
  return (
   
     
        <Router>
          <header className='App-header'>
            <Navbar bg='dark' variant='dark'>
              <Container>
                <Nav defaultActiveKey="/" variant="tabs" fill>
                  <Nav.Item>
                    <Nav.Link href="/">
                      <Link to="/">Home</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey={"Movie List"}>
                      <Link to="/movie-list"> Movie List </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey={"Movie details"}>
                      <Link to="/movie-details">Movie details</Link>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Container>
            </Navbar>
          </header>

          <div className="display">
            <Route path="/" component={Home} />
            <Route path="/movie-list" component={MovieList} />
            <Route path="/movie-details" component={MovieDetails} />
          </div>

        </Router>

  );
}

export default App;
