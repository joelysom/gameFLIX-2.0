import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Pagination, Card, Row, Col, Dropdown } from 'react-bootstrap';
import './App.css';

// Importando as imagens diretamente
import treinoForcaImg from './assets/beautiful-perfect-body-woman-is-work-out-in-the-gym-free-photo.jpg';
import cardioIntensoImg from './assets/Cia-Athletica-Nacional-Treino-funcional-Mulher-definida-realizando-agachamento-com-elastico-na-academia.jpg';
import treinoFuncionalImg from './assets/images.jpg';
import beneficioImg from './assets/beneficio.jpg'; // Nova imagem para o benefício

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

function AboutPage() {
  return (
    <Container className="text-center mt-4">
      <h1>Sobre Nós</h1>
      <p>
        A <span translate="no">Session Fit</span> nasceu com a missão de transformar vidas por meio do 
        bem-estar e da saúde. Oferecemos treinos personalizados, equipamentos modernos e um ambiente 
        acolhedor para ajudá-lo a alcançar seus objetivos. Seja força, resistência ou equilíbrio, estamos 
        aqui para guiá-lo em sua jornada fitness.
      </p>
      <Row>
        <Col md={6}>
          <h2>Nossa Visão</h2>
          <p>
            Ser referência no mercado fitness, promovendo saúde e qualidade de vida com responsabilidade e inovação.
          </p>
        </Col>
        <Col md={6}>
          <h2>Nossos Valores</h2>
          <ul>
            <li>Compromisso com resultados</li>
            <li>Atendimento de excelência</li>
            <li>Respeito à diversidade</li>
            <li>Inovação contínua</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

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

function PaginationExample() {
  return (
    <Pagination className="justify-content-center mt-4">
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
}

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span translate="no">Session Fit</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Início</Nav.Link>
              <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
            </Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Menu
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
                <Dropdown.Item>Academias</Dropdown.Item>
                <Dropdown.Item>Espaço do Cliente</Dropdown.Item>
                <Dropdown.Item>Seja um Franqueado</Dropdown.Item>
                <Dropdown.Item>News</Dropdown.Item>
                <Dropdown.Item>Planos</Dropdown.Item>
                <Dropdown.Item>Sustentabilidade</Dropdown.Item>
                <Dropdown.Item>Nossa História</Dropdown.Item>
                <Dropdown.Item>Dúvidas Frequentes</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <PaginationExample />
    </Router>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
