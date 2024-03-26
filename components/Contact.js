import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import './Contact.css';
const Contact = () => {
  return (
    <div className='af-height-90 af-max-width mx-auto mt-2 position-relative'>
    <Container id="menu">
        <h1>Get in Touch!</h1>
        <br>
        </br>
        <h2> Email:</h2>
        <p> info@theslipbar.com</p>
        <br>
        </br>

        <Row>
          <br>
          </br>
          <Col md={6}>
            <h2> The Slip Lomita</h2>
            <p> 24503 Narbonne Ave.</p>
            <p>Lomita, CA 90717</p>
            <p> Phone:  (424) 376-6947</p>
          </Col>
          <Col md={6}>
            <h2> The Slip Redondo Beach</h2>
            <p> 120 N. International Boardwalk</p>
            <p>Redondo Beach, CA 90277</p>
            <p> Phone: (310) 376-8910</p>
          </Col>
        
      
        </Row>
      </Container>
    </div>  
  );
}

export default Contact;