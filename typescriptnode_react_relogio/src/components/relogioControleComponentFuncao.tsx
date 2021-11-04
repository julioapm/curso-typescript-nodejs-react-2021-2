import { useState, useEffect } from 'react';

const RelogioControleFuncao = () => {
    //cada estado gerenciado de forma independente
    //estado "ligado"
    const [ligado, setLigado] = useState(false);
    //estado "data" + efeito de atualização
    const [data, setData] = useState(new Date());
    
    useEffect(() => {
        function tick() {
            setData(new Date());
        }
        let intervalo: NodeJS.Timeout;
        if (ligado) {
            intervalo = setInterval(() => tick(), 1000);
        }
        return () => clearInterval(intervalo);
    }, [ligado]); //atualização somente se ligado mudar

    //renderização condicional
    return (
        <div>
            <h1>Relógio Controle Função:</h1>
            {!ligado && (<button onClick={() => setLigado(true)}>Ligar</button>)}
            {ligado && (<button onClick={() => setLigado(false)}>Desligar</button>)}
            <h2>{data.toLocaleTimeString()}</h2>
        </div>
    );
}

export default RelogioControleFuncao;