abstract class Cliente {
    constructor(
       private _nome: string 
    ) {}
    get nome() {
        return this._nome;
    }
    abstract get mensalidade(): number;
    toString(): string {
        return `Nome: ${this.nome} - Mensalidade: ${this.mensalidade}`;
    }
}

class ClienteFisico extends Cliente {
    constructor (
        nome: string,
        public idade: number,
        public salario: number
    ) {
        super(nome);
    }
    get mensalidade(): number {
        if (this.idade < 60) {
            return this.salario * 0.1;
        } else {
            return this.salario * 0.15;
        }
    }
}

class ClienteJuridico extends Cliente {
    constructor (
        nome: string,
        private _mensalidade: number
    ) {
        super(nome);
    }
    get mensalidade(): number {
        return this._mensalidade;
    }
    set mensealidade(valor: number) {
        this._mensalidade = valor;
    }
}

class CadastroClientes {
    private _clientes: Cliente[] = [];
    adiciona(cliente: Cliente): void {
        this._clientes.push(cliente);
    }
    toString(): string {
        return this._clientes.join('\n');
    }
}

let cadastroClientes = new CadastroClientes();
cadastroClientes.adiciona(new ClienteFisico('João', 20, 1000));
cadastroClientes.adiciona(new ClienteFisico('Maria', 50, 2000));
cadastroClientes.adiciona(new ClienteJuridico('Empório', 1000));
console.log(cadastroClientes.toString());