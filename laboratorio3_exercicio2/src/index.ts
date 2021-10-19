class Moeda {
    constructor(
        private valorDaMoeda: number,
        private nomeDaMoeda: string
    ) { }
    get valorMoeda() {
        return this.valorDaMoeda
    }
    get nomeMoeda() {
        return this.nomeDaMoeda
    }
}

class Cofrinho {
    private moedas: Moeda[] = [];
    adicionar(moeda: Moeda) {
        this.moedas.push(moeda);
    }
    calcTotal() {
        let total = 0;
        this.moedas.forEach(moeda => {
            total = total + moeda.valorMoeda;
        });
        return total;
    }
}

let litleCofre = new Cofrinho();
litleCofre.adicionar(new Moeda(0.25, "Vinte e Cinco Centavos"));
litleCofre.adicionar(new Moeda(0.50, "Cinquenta Centavos"));
litleCofre.adicionar(new Moeda(1, "Um Real"));
console.log(litleCofre.calcTotal());