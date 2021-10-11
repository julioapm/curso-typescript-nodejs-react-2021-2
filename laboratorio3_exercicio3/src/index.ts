class Moeda {
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
    menorValorMoeda(): number {
        let menor = this.moedas[0].valorDaMoeda;
        this.moedas.forEach(moeda => {
            if (moeda.valorDaMoeda < menor) {
                menor = moeda.valorDaMoeda;
            }
        });
        return menor;
    }
    menorValorMoedaV2(): number {
        return this.moedas.reduce((menor, moeda) => {
            if (moeda.valorDaMoeda < menor) {
                return moeda.valorDaMoeda;
            }
            return menor;
        }, this.moedas[0].valorDaMoeda);
    }
    menorValorMoedaV3(): number {
        return Math.min(...this.moedas.map(moeda => moeda.valorDaMoeda));
    }
    menorMoeda(): Moeda {
        let menor = this.moedas[0];
        this.moedas.forEach(moeda => {
            if (moeda.valorDaMoeda < menor.valorDaMoeda) {
                menor = moeda;
            }
        });
        return menor;
    }
    frequencia(): Map<string, number> {
        let map = new Map<string, number>();
        map.set('1 real', 0);
        map.set('50 centavos', 0);
        map.set('25 centavos', 0);
        map.set('10 centavos', 0);
        map.set('5 centavos', 0);
        map.set('1 centavo', 0);
        this.moedas.forEach(moeda => {
            map.set(moeda.nomeDaMoeda, map.get(moeda.nomeDaMoeda)! + 1);
        });
        return map;
    }
}

let cofre = new Cofrinho();
cofre.adicionar(new Moeda(1, '1 real'));
cofre.adicionar(new Moeda(0.5, '50 centavos'));
cofre.adicionar(new Moeda(0.25, '25 centavos'));
console.log(cofre.calcularTotal());
console.log(JSON.stringify(cofre));
console.log(cofre.frequencia());