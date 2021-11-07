import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Outlet} from 'react-router-dom';

function App() {
  return (
    <>

    
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={NavLink} to="/">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/usuarios">Usuários</Nav.Link>
            <Nav.Link as={NavLink} to="/sobre">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header>
        

             


      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Desenvolvido com React, React-Router, React-Bootstrap</p>
      </footer>
    </>
  );
}

export default App;