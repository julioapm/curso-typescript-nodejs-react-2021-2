import React from 'react';
import './App.css';
import RelogioClasse from './components/relogioComponentClasse';
import RelogioFuncao from './components/relogioComponentFuncao';
import RelogioControleFuncao from './components/relogioControleComponentFuncao';
function App() {
  return (
    <div>
      <RelogioClasse />
      <p>
      <RelogioFuncao />
      </p>
      <RelogioControleFuncao />
    </div>
  );
}

export default App;
