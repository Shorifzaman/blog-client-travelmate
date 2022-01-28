import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Projects from './Projects';
import './Hero.css';

const Sliders = () => {

 
    return (
        <>
        <section id="herosection">
          <Container>
            <Row className='d-flex flex-row align-items-center align-items-center'>
              <Col className='d-flex flex-row align-items-center align-items-center' sm={12}>
                <Projects></Projects>
              </Col>

          {/* <Col sm={4} className='d-flex align-items-center align-items-center bd-highlight mb-0 border g-1'>

            <CardGroup>
            <Card className='shadow p-1 mb-2 bg-white rounded'>
              <Card.Img variant="top" src="https://zamanresume.netlify.app/myabout.png" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className='shadow p-1 mb-2 bg-white rounded'>
              <Card.Img variant="top" src="https://zamanresume.netlify.app/myabout.png" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
              </Col> */}
            </Row>
            
          </Container>

</section>
        </>
    );
};

export default Sliders;