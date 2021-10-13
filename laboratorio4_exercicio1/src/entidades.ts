export class Moeda {
    constructor(
        private valor: number,
        private nome: string
    ) {}
    get valorDaMoeda() {
        return this.valor;
    }
    get nomeDaMoeda() {
        return this.nome;
    }
}

export class Cofrinho {
    private moedas: Moeda[] = [];
    adicionar(moeda: Moeda) {
        this.moedas.push(moeda);
    }
    calcularTotal() {
        let total = 0;
        this.moedas.forEach(moeda => {
            total = total + moeda.valorDaMoeda;
        });
        return total;
    }
}