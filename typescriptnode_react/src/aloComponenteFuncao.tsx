interface Props {
    nome: string;
}

export function AloComponenteFuncao(props: Props) {
    const nome = props.nome;
    return (<h1>Alô {nome}, Componente Função</h1>);
}