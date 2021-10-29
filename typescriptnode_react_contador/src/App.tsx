import React from 'react';
import './App.css';
import ContadorClasse from './components/contadorComponentClasse';

function App() {
  return (
    <div>
      <h1>Contadores:</h1>
      <ContadorClasse valorInicial={5}/>
    </div>
  );
}

export default App;
