import React,{useState, useEffect} from 'react';
import './App.css';
import {Cep} from './dtos';

function App() {
  const [dados, setDados] = useState<Cep>();
  const [cep, setCep] = useState('94360100');
  const [url, setUrl] = useState('https://viacep.com.br/ws/94360100/json/');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(()=> {},[url]);
  
  return (
    <>
      <form onSubmit = {event=> {
        setUrl(`viacep.com.br/ws/${cep}/json/`);
        event.preventDefault();
      }}>
        <fieldset>
          <legend>Buscar ViaCEP</legend>
          <input type= "text" value={cep} onChange={event=>setCep(event.target.value)}/>
          <button type="submit"> Buscar</button>
        </fieldset>
      </form>
        {erro && <div>Ocorreu um erro!</div>}
        {carregando ? (<div>Carregando...</div>):(
          dados && (
            <div>
              <p>CEP: {dados.cep}</p>
              <p>Logradouro: {dados.logradouro}</p>
              <p>Complementos: {dados.complemento}</p>
              <p>Bairro: {dados.bairro}</p>
              <p>Localidade: {dados.localidade}</p>
              <p>UF: {dados.uf}</p>
            </div>
          )
        )}
      
    </>

    //Resultado
  );
}

export default App;
