// Utilize o ambiente Node.ja para executar no console o código TypeScript destes exercícios. Você pode
// utilizar como base o projeto configurado no Laboratório 1.
// 1. Crie uma classe que represente um Círculo. Esta classe deve possuir as propriedades de um ponto central
// (coordenadas x, y) e um tamanho de raio. Defina métodos para o cálculo da área do círculo e do comprimento
// da circunferência. Escreva um bloco de código para testar a implementação do círculo.

class Circulo {
  constructor(x: number, y: number, raio: number) {
    console.log(`A área do círculo será ${(Math.PI * raio * raio).toFixed(1)} cm²`);
    console.log(`A circunferência do círculo será ${(Math.PI * raio * 2).toFixed(1)} cm`);
  }
}

const resultadoCirculo = new Circulo(10, 20, 5);


// 2. Sejam os seguintes objetos representados em um diagrama de classes UML:
// a) Implemente as classes correspondentes em TypeScript. Você pode implementar os métodos get
// apresentados na classe Moeda como: campos somente de leitura, métodos de acesso ou propriedades
// de leitura. Utilize uma coleção adequada para implementar a coleção de moedas na classe Cofrinho.
// b) Escreva um bloco de código para testar a implementação.
// c) Utilize um código para serializar um objeto Cofrinho em JSON e procure entender o formato de
// string que foi construído.

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
}

let cofre = new Cofrinho();
cofre.adicionar(new Moeda(1, "Um Real"));
cofre.adicionar(new Moeda(0.5, "50 centavos"));
cofre.adicionar(new Moeda(0.25, "25 centavos"));
console.log(cofre.calcularTotal());
console.log(JSON.stringify(cofre));


// 3. Altere a implementação da classe Cofrinho do exercício anterior para incluir: 
// • Método que retorna o valor da menor moeda armazenada. 
// • Método que retorna uma instância da menor moeda armazenada. 
// • Método que retorna um mapa/dicionário com a frequência (o número de moedas) de cada moeda 
// existente (1 centavo, 5 centavos, 10 centavos, 25 centavos, 50 centavos, 1 real) no cofrinho.




// 4. Seja a seguinte hierarquia de herança representada em um diagrama e classes UML: 
 
//  a) Implemente as classes em TypeScript. Para o cálculo do valor da mensalidade utilize as seguintes 
// informações: Esta empresa de seguros cobra uma mensalidade correspondente a 10% do salário se o 
// cliente tem menos de 60 anos e 15% se o cliente tem 60 anos ou mais, no caso de clientes que são 
// pessoa física. Para pessoas jurídicas é cobrada uma mensalidade variável, calculada através de 
// negociações com o cliente. 
 
// 2 
// b) Implemente uma classe CadastroClientes para armazenar o cadastro de clientes da empresa de 
// seguros. Apresente métodos para adicionar um cliente ao cadastro e retornar uma string contendo a 
// listagem de todos os clientes, mostrando seu nome e o valor da mensalidade a ser paga. Utilize uma 
// coleção em memória.
