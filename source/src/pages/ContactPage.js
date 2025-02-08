import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Importando os componentes do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap


function ContactPage() {
  return (
    <Container className="text-center mt-4">
      <h1>Contato</h1>
      <p>Entre em contato conosco para mais informações e ofertas especiais.</p>
      <Row className="mt-4">
        <Col md={6}>
          <h2>Informações de Contato</h2>
          <ul>
            <li><strong>Telefone:</strong> (11) 1234-5678</li>
            <li><strong>Email:</strong> contato@sessionfit.com</li>
            <li><strong>Endereço:</strong> Av. Saúde, 123 - Centro, São Paulo, SP</li>
          </ul>
        </Col>
        <Col md={6}>
          <h2>Envie-nos uma mensagem</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" placeholder="Seu nome" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Seu email" />
            </div>
            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">Mensagem</label>
              <textarea className="form-control" id="mensagem" rows="3" placeholder="Sua mensagem"></textarea>
            </div>
            <Button variant="primary" type="submit">Enviar</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
