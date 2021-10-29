import * as React from 'react';

interface Props {
    valorInicial: number;
    valorFinal?: number;
}
interface State {
    contagem: number;
}

export default class ContadorClasse extends React.Component<Props,State> {
    static defaultProps = {
        valorFinal: 100
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            contagem: this.props.valorInicial
        };
    }

    incrementar = () => {
        this.setState({ contagem: this.state.contagem + 1 });
    };

    decrementar = () => {
        this.setState((state, props) => {
            if (state.contagem > 0) {
                return { contagem: state.contagem - 1 }
            }
            return state;
        });
    };

    render() {
        return (
            <div>
                <h2>{this.state.contagem}</h2>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.decrementar}>Decrementar</button>
            </div>
        );
    }
}