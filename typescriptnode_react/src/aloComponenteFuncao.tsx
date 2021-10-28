interface Props {
  nome: string;
}

export function AloComponenteFuncao(props: Props) {
  const nome = props.nome;
  return <h1>Alo {nome}, Componente Função</h1>;
}
