import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="text-center mt-4">
      <h2>Entre em Contato</h2>
      <Row>
        <Col md={6}>
          <h4>Informações</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><strong>Telefone:</strong> (11) 1234-5678</li>
            <li><strong>Email:</strong> contato@sessionfit.com</li>
            <li><strong>Endereço:</strong> Av. Saúde, 123 - Centro, São Paulo, SP</li>
          </ul>
        </Col>
        <Col md={6}>
          <h4>Siga-nos nas Redes Sociais</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
