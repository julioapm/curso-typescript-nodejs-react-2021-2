import { useState, useEffect } from 'react';

interface Props {}
interface State {
    data: Date;
}

const RelogioFuncao = (props: Props) => {
    const [state, setState] = useState<State>({data: new Date()});
    let timerID: NodeJS.Timeout;
    
    useEffect(() => {  
        function tick() {
            setState({
                data: new Date()
            });
        }
       
        timerID = setInterval(() => tick(), 1000);
           // Especifique como limpar depois desse efeito:    
          //return (clearInterval(timerID)); 
    });

    return (
        <div>
            <h1>Função:</h1>
            <h2>{state.data.toLocaleTimeString()}</h2>
        </div>
    );
};

export default RelogioFuncao;