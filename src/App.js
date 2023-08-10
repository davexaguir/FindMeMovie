import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/home";
import About from "./components/movie-details";
import Packages from "./components/movie-list";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function App() {
  const packages = [
    "Activate your Crystals",
    "Monkey Meditation",
    "Soak in the Hotsprings",
    "Hypnotherapy",
    "Mineral Bath",
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <div className="navBar">
            <Container>
              <Nav defaultActiveKey="/" variant="tabs" fill>
                <Nav.Item>
                  <Nav.Link href="/">
                    <Link to="/">Home</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"aboutPage"}>
                    <Link to="/movie-details">About Us</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"packagesPage"}>
                    <Link to="/packages">Our Packages</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          </div>
        </header>

        <div className="display">
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/packages"
              render={() => <Packages packages={packages} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
