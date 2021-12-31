import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import logo from "./images/logo.png";

import EmpTables from './components/EmpTables/EmpTables';
import EmpForm from './components/EmpForm/EmpForm';
import { useDispatch } from 'react-redux';
import { getEmpPost } from './actions/emp';


const App = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmpPost())
  },[currentId, dispatch])
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" width="40px" height="40px" />{' '}
          Employee Data
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col sm={8}><EmpTables setCurrentId={setCurrentId} /></Col>
          <Col sm={4}><EmpForm currentId={currentId} setCurrentId={setCurrentId} /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
