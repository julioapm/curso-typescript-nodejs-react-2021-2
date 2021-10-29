import React from 'react';
import './App.css';
import ContadorClasse from './components/contadorComponentClasse';
import ContadorFuncao from './components/contadorComponentFuncao';

function App() {
  return (
    <div>
      <h1>Contadores:</h1>
      <ContadorClasse valorInicial={5}/>
      <ContadorFuncao valorInicial={0}/>
    </div>
  );
}

export default App;
