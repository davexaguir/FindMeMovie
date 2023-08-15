import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import NavBar from './NavBar'
import moviesRouter from '../../../backend/controllers/movies'

//Pass movies prop to Movie child component
//movies will be an array of all the movies for that specific genre
//Look up .map() to map through the list of movies and display the property you need
export default function Movie() {
    return (
        <>
        <Card border="info" >
            <Card.Header className="blockquote mb-0 card-body"> </Card.Header>
            <Card.Body>
                <Card.Text>

                </Card.Text>
                <Card.Text>

                </Card.Text>
                <Card.Text>

                </Card.Text>
                <Card.Text>

                </Card.Text>
            </Card.Body>
            <Card.Img style={{ width: '50%', margin: '0 auto' }} variant="bottom" src="hotsprings.jpg" />
        </Card>
     </>
         )
}