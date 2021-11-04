import React, { useState, useEffect } from 'react';
import './App.css';
import { Cep } from './dtos';

function App() {
  const [dados, setDados] = useState<Cep>();
  const [cep, setCep] = useState('90000000');
  const [url, setUrl] = useState('https://viacep.com.br/ws/90000000/json/');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function consultarViaCep() {
      setErro(false);
      setCarregando(true);
      try {
        const resultado = await fetch(url);
        if (resultado.ok) {
          const dados: Cep = await resultado.json();
          setDados(dados);
        } else {
          setErro(true);
        }
      } catch (error) {
        setErro(true);
      }
      setCarregando(false);
    }
    consultarViaCep();
  }, [url]);

  return (
    <>
      <form onSubmit={event => {
        setUrl(`https://viacep.com.br/ws/${cep}/json/`);
        event.preventDefault();
      }}>
        <fieldset>
          <legend>Busca ViaCEP</legend>
          <input type="text" value={cep} onChange={event => setCep(event.target.value)}/>
          <button type="submit">Buscar</button>
        </fieldset>
      </form>
      {erro && <div>Ocorreu um erro!</div>}
      {carregando ? (
        <div>Carregando...</div>
      ) : (
        dados && (
          <div>
            <p>CEP: {dados.cep}</p>
            <p>Logradouro: {dados.logradouro}</p>
            <p>Complemento: {dados.complemento}</p>
            <p>Bairro: {dados.bairro}</p>
            <p>Localidade: {dados.localidade}</p>
            <p>UF: {dados.uf}</p>
          </div>
        )
      )}
    </>
  );
}

export default App;
