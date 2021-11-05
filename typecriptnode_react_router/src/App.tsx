import React from 'react';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <h1>React Router Demo</h1>
        <nav>
          <Link to="/">Principal</Link> | {' '}
          <Link to="/sobre">Sobre</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Desenvolvido com React e React-Router</p>
      </footer>
    </>
  );
}

export default App;
