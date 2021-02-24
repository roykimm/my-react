import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Example@gmail.com"></Form.Control>
                <Form.Text className="text-muted">
                  We'll never share you email address, trues us!
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          
          
          <Button variant="secondary" type="submit">Login</Button>
        </Form>
        <Card className="mb-3" style={{ color : "#000" }}>
          <Card.Img src="https://picsum.photos/200/100" />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>
              This is an example of react bootstrap
            </Card.Text>
            <Button variant="primary">read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item >Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">this is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
