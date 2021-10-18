class moeda {
    constructor(
        private valorDaMoeda: number,
        private nomeDaMoeda: string
    ) { }
}


























/*class Moeda {
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

class Cofrinho {
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

let cofre = new Cofrinho();
cofre.adicionar(new Moeda(1, 'Um Real'));
cofre.adicionar(new Moeda(0.5, '50 centavos'));
cofre.adicionar(new Moeda(0.25, '25 centavos'));
console.log(cofre.calcularTotal());
console.log(JSON.stringify(cofre));*/