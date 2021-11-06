import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={NavLink} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/sobre">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;