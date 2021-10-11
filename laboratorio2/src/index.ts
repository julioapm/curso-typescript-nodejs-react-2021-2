//Exercício 1
function imprimirParesWhile() {
    let inicio = 0;
    let fim = 10;
    while (inicio <= fim) {
        if (inicio % 2 == 0) {
            console.log(inicio);
        }
        inicio++;
    }
}

function imprimirParesFor() {
    let inicio = 0;
    let fim = 10;
    for (let valor = inicio; valor <= fim; valor++) {
        if (valor % 2 == 0) {
            console.log(valor);
        }
    }
}

//Exercício 2
function loopInfinito() {
    let i = 0;
    while (i != 10) {
        i += 0.2;
    }
}
//A condição i igual a 10 jamais será verdadeira, causando um loop infinito.
//Isso se deve à representação de ponto flutuante para o tipo number possuir arredondamento.

//Exercício 3
function min(x: number, y: number): number {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

//Exercício 4
function pow(x: number, y: number): number {
    let resultado = 1;
    for (let i = 0; i < y; i++) {
        resultado *= x;
    }
    return resultado;
}

function powRecursivo(x: number, y: number): number {
    if (y == 0) {
        return 1;
    } else {
        return x * powRecursivo(x, y - 1);
    }
}

//Exercício 5
function toMaiusculaPrimeira(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

//Exercício 6
function getMax(array: number[]): number {
    let maior = array[0];
    for (let valor of array) {
        if (valor > maior) {
            maior = valor;
        }
    }
    return maior;
}

//Exercício 7
function frequencia(array: number[]): Map<number,number> {
    let contagem = new Map<number,number>();
    for (let valor of array) {
        if (contagem.has(valor)) {
            contagem.set(valor, contagem.get(valor)!+1);
        } else {
            contagem.set(valor,1);
        }
    }
    return contagem;
}

function frequenciaV2(array: number[]): Map<number,number> {
    return array.reduce((contagem, valor) => 
    contagem.set(valor, (contagem.get(valor)||0)+1), 
    new Map<number,number>());
}