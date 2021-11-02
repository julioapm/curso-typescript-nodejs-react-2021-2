import {useState} from 'react';

interface State {
  data: Date;
}

export default function RelogioFuncao() {
  const [state, setState] = useState<State>({
    data: new Date(),
  });

  function tick() {
    setState({
      data: new Date(),
    });
  }

  setInterval(tick, 1000);

  return (
    <div>
      <h1>Relógio utilizando Funções:</h1>
      <h2>{state.data.toLocaleTimeString()}</h2>
    </div>
  );
}
