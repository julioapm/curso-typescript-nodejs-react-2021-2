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

class Cofrinho{
     private moedas: Moeda[] = [];
     adicionar(moeda: Moeda){
         this.moedas.push(moeda);
     }
     calcTotal(){
         let total = 0;
         this.moedas.forEach(moeda => {
             total = total + moeda.valorMoeda;
         });
         return total;
     }
     
}
