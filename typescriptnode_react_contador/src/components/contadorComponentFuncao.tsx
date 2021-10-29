import {useState} from 'react';

interface Props {
  valorInicial: number;
}

interface State {
  contagem: number;
}

const ContadorFuncao = (props: Props) => {
  const [state, setState] = useState<State>({contagem: props.valorInicial});
  return (
    <div>
      <h2>{state.contagem}</h2>
      <button onClick={() => {setState({contagem: state.contagem + 1})}}>Incrementar</button>
    </div>
  );
};

export default ContadorFuncao;