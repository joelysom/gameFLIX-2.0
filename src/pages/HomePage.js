import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import treinoForcaImg from '../assets/beautiful-perfect-body-woman-is-work-out-in-the-gym-free-photo.jpg';
import cardioIntensoImg from '../assets/Cia-Athletica-Nacional-Treino-funcional-Mulher-definida-realizando-agachamento-com-elastico-na-academia.jpg';
import treinoFuncionalImg from '../assets/images.jpg';
import beneficioImg from '../assets/beneficio.jpg';

function HomePage() {
  return (
      <Container className="text-center mt-4">
        <h1>Bem-vindo à Academia</h1>
        <p>Seu corpo merece o melhor cuidado. Explore nossos serviços e treinos.</p>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Img 
                variant="top" 
                src={treinoForcaImg} 
                alt="Treino de Força" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>Treino de Força</Card.Title>
                <Card.Text>
                  Aumente sua força com nossos treinos personalizados.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img 
                variant="top" 
                src={cardioIntensoImg} 
                alt="Treino Cardio Intenso" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>Cardio Intenso</Card.Title>
                <Card.Text>
                  Melhore sua resistência com exercícios cardiovasculares.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img 
                variant="top" 
                src={treinoFuncionalImg} 
                alt="Treino Funcional" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>Treino Funcional</Card.Title>
                <Card.Text>
                  Desenvolva força e equilíbrio com treinos dinâmicos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        {/* Benefício Especial */}
        <h2 className="mt-5">Benefício Especial</h2>
        <Row className="mt-4">
          <Col md={12}>
            <Card>
              <Card.Img 
                variant="top" 
                src={beneficioImg} 
                alt="Benefício Especial" 
                style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>Traga sua prima e ganhe benefícios!</Card.Title>
                <Card.Text>
                  Traga sua prima para nossa academia e receba um desconto exclusivo de 20% na sua mensalidade. 
                  Aproveite essa oportunidade!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        <h2 className="mt-5">Nossos Planos</h2>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Plano Básico</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Acesso à academia</li>
                    <li>Horário livre</li>
                    <li>Suporte básico</li>
                  </ul>
                  <strong>R$ 99/mês</strong>
                </Card.Text>
                <Button variant="primary">Assinar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Plano Plus</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Acesso total à academia</li>
                    <li>Aulas em grupo</li>
                    <li>Consultoria com treinador</li>
                  </ul>
                  <strong>R$ 149/mês</strong>
                </Card.Text>
                <Button variant="success">Assinar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Plano Premium</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Acesso VIP à academia</li>
                    <li>Personal Trainer dedicado</li>
                    <li>Suporte nutricional</li>
                  </ul>
                  <strong>R$ 199/mês</strong>
                </Card.Text>
                <Button variant="warning">Assinar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default HomePage;
