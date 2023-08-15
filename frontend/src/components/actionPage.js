import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import NavBar from './NavBar'

export default function Comedy() {
    return (
        <>
        <NavBar/>
        <div className="comedyList">
            <div className="comedyHeader">
                <Container>
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
                </Container>
            </div>
     </div> 
     </>
         )
}