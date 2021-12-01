import React from 'react';
import './App.css';
import NavBar from './components/layout/navigation/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
