import React, { useState, useEffect } from 'react';
import './App.css';
import { Cep } from './dtos';

function App () {
  const [dados, setDados] = useState<Cep>();
  const [uf, setUf] = useState('RS');
  const [localidade, setLocalidade] = useState('Porto Alegre');
  const [logradouro, setLogradouro] = useState('Domingos');
  const [url, setUrl] = useState('https://viacep.com.br/ws/RS/Porto Alegre/Domingos/json/');
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
          console.log(dados);
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
        setUrl(`https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json/`);
        event.preventDefault();
      }}>
        <fieldset>
          <legend><b>Busca ViaCEP Localização</b></legend>
          <label>
            <b>Logradouro:</b>
          </label>
          <input type="text" required value={logradouro} onChange={event => setLogradouro(event.target.value)}/>
          <br/>
          <label>
            <b>Localidade:</b>
          </label>
          <input type="text" required value={localidade} onChange={event => setLocalidade(event.target.value)}/>
          <br/>
          <label>
            <b>UF:</b>
          </label>
          <input type="text" required value={uf} onChange={event => setUf(event.target.value)}/>
          <br/>
          <button type="submit">Buscar</button>
        </fieldset>
      </form>
      {erro && <div>Ocorreu um erro!</div>}
      {carregando ? (
        <div>Carregando...</div>
      ) : (
        dados && (
          <div>
            {dados.map((dados:Cep) =>{
            return(
            <div>
              <p><b>CEP:</b> {dados.cep}</p>
              <p><b>Logradouro:</b> {dados.logradouro}</p>
              <p><b>Complemento:</b> {dados.complemento}</p>
              <p><b>Bairro:</b> {dados.bairro}</p>
              <p><b>Cidade:</b> {dados.localidade}</p>
              <p><b>UF:</b> {dados.uf}</p>
              <p>---------------------------</p>
            </div>
            )
          })}
          </div>
        )
      )}
    </>
  );
}

export default App;