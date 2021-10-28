import React from 'react';

interface Props {
    nome: string;
}

export class AloComponenteClasse extends React.Component<Props> {
    render() {
        const {nome} = this.props;
        return (<h1>Alô {nome}, Componente Classe</h1>);
    }
}