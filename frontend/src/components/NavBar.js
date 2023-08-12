import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom'
export default function NavBar (props){
    return(
      <header>
            <h1 className="title">Welcome to FindMeMovie, {props.userName}</h1>
  
            <div className="navBar">
              <Container>
                <Nav defaultActiveKey="/" variant="tabs" fill>
                  <Nav.Item>
                    <Nav.Link href="/">
                      <Link to="/">Home</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey={"actionPage"}>
                      <Link to="/actionList"> Action</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey={"dramaPage"}>
                      <Link to="/dramaList">Drama</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={'comedyPage'}>
                      <Link to="/comedyList">Comedy</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={'horrorPage'}>
                      <Link to="/horrorList">Horror</Link>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Container>
  
            </div>
          </header>
    )
  }