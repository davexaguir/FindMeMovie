import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import NavBar from './NavBar'

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
                        <Row>
                            <Col xs={6} md={4}><br></br>
                                <Image style={{ width: '80%', margin: '0 auto' }} src="https://m.media-amazon.com/images/M/MV5BNWY1NDI0ZTQtMjJiNS00ODY4LWE1NmUtYTkwNzY3NWQ0ZDZjXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg" rounded />
                            </Col>
                            <Col xs={2} md={4}><br></br>
                                <Image style={{ width: '80%', margin: '0 auto' }} src="https://m.media-amazon.com/images/M/MV5BNWY1NDI0ZTQtMjJiNS00ODY4LWE1NmUtYTkwNzY3NWQ0ZDZjXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg" rounded />
                            </Col>
                            <Col xs={6} md={4}><br></br>
                                <Image style={{ width: '80%', margin: '0 auto' }} src="https://m.media-amazon.com/images/M/MV5BNWY1NDI0ZTQtMjJiNS00ODY4LWE1NmUtYTkwNzY3NWQ0ZDZjXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg" rounded />
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}