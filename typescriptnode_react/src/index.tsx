import React from 'react';
import ReactDOM from 'react-dom';
import { AloComponenteClasse } from './aloComponenteClasse';
import { AloComponenteFuncao } from './aloComponenteFuncao';

const nome = 'Fabio';
const elemento = (<h1>Alô, {nome}!</h1>);
const elemento2 = (<AloComponenteFuncao nome = 'Fabio'/>)
const elemento3 = (<AloComponenteClasse nome = 'Fábio'/>);

ReactDOM.render(elemento, document.getElementById('alo1'));
//ReactDOM.render(AloComponenteFuncao(), document.getElementById('alo2'));
ReactDOM.render(elemento2, document.getElementById('alo2'));
ReactDOM.render(elemento3, document.getElementById('alo3'));

