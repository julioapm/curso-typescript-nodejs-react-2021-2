import React, { useState, useEffect } from 'react';

const RelogioFuncao = () => {
    const [data, setData] = useState(new Date());

    useEffect(() => {
        function tick() {
            setData(new Date());
        }
        const intervalo = setInterval(() => tick(), 1000);
        return () => clearInterval(intervalo);
    });

    return (
        <div>
            <h1>Relógio Função:</h1>
            <h2>{data.toLocaleTimeString()}</h2>
        </div>
    );
}

export default RelogioFuncao;