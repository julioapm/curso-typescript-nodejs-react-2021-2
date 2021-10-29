import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AloComponenteFuncao } from './aloComponenteFuncao';
import { AloComponenteClasse } from './aloComponenteClasse';

const nome = 'Júlio Machado';
const elemento = (<h1>Alô, {nome}!</h1>);
const elemento2 = (<AloComponenteFuncao nome = "Júlio"/>);
const elemento3 = (<AloComponenteClasse nome = "Júlio"/>);

ReactDOM.render(elemento, document.getElementById('alo1'));
ReactDOM.render(elemento2, document.getElementById('alo2'));
ReactDOM.render(elemento3, document.getElementById('alo3'));