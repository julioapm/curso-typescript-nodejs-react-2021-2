import * as React from 'react';

interface Props {}
interface State {
    data: Date;
}

export default class RelogioClasse extends React.Component<Props,State> {

    constructor(props: Props, private timerID: NodeJS.Timeout) {
        super(props);
        this.state = {
            data: new Date()
        };
    }

    render() {
        return (
            <div>
                <h1>Relógio Classe:</h1>
                <h2>{this.state.data.toLocaleTimeString()}</h2>
            </div>
        );
    }

    tick() {
        this.setState({
            data: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}