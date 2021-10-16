// 1. Escreva um trecho de código para imprimir os números pares definidos por um intervalo de valores inteiros
// não-negativos inicio e fim. Utilize versões com for e while.

// R: Utilizando o for
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log (i);
    }
}
  
// R: Utilizando o while
let numero: number = 2;

while (numero <= 10) {
    if (numero % 2 == 0) {
        console.log(numero) 
    }
    numero++
}


// 2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?
// let i: number = 0;
// while (i != 10) {
//  i += 0.2;
// }

// R: O resultado do bloco de comando será um loop, já que o while nunca será false, pois
// a varíavel i terá o valor "9.99" e após essa execução, terá o valor "10.19", nunca
// chegando aos "10", para o loop deixar de ser executado.


// 3. Escreva uma função min(x,y) que devolve o menor entre dois números. Não use funções auxiliares de
// Math. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função

function min(x: number, y: number) {
    if (x > y) {
        return x;
    } else if (x < y) {
        return y;
    } else {
        return "Os 2 números possuem o mesmo valor";
    }
}
console.log(min(5,3))


// 4. Escreva uma função pow(x,y) que calcula o valor de 𝑥^𝑦, ou seja, x elevado a potência y. Assuma que os
// valores de x e y são números inteiros não negativos e que 𝑥^0 = 1 para qualquer valor de x. Apresente uma
// versão iterativa e uma versão recursiva para a função. Não utilize o operador **. Utilize corretamente a
// declaração de tipos nos parâmetros e no resultado da função.
  
// Versão recursiva
function pow(x: number, y: number):number {
    if (y == 0) {
        return 1;
    } else {
        return x * pow(x, y - 1)
    }
}
console.log(pow(2, 4))
console.log(pow(2, 0))
  
// Versão iterativa
function pow2(x: number, y: number) {
  let resultado = 1;
  for (let count = 0; count < y; count++) {
    resultado *= x;
  }
  return resultado;
};
console.log(pow2(2, 4));


// 5. Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s (assuma qualquer string não vazia) e
// retorna a mesma string com a primeira letra em maiúscula. Utilize corretamente a declaração de tipos nos
// parâmetros e no resultado da função

function toMaiusculaPrimeira(s: string) {
    return s[0].toUpperCase() + s.slice(1);; 
}
console.log(toMaiusculaPrimeira("teste"))


// 6. Escreva uma função getMax(arr) que recebe um array de número inteiros e retorna o maior elemento
// encontrado no array. Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos
// disponibilizados pelo TypeScript. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da
// função.

function getMax(arr: Array<number>) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
        max = arr[i];          
    }
  }
return max;  
}
console.log(getMax([1, 5, 7, 3, 6, 10, 2]))


// 7. Escreva uma função que, utilizando objetos Map, calcule a frequência de cada número presente em um
// determinado array contendo números inteiros. Utilize corretamente a declaração de tipos nos parâmetros e no
// resultado da função.

function frequenciaNumeros(arr: Array<number>) {
    let acc = arr.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());
    return acc;
}
console.log(frequenciaNumeros([5, 5, 5, 2, 2, 2, 2, 2, 9, 4, 2]));