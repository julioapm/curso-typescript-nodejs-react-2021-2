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
//FABIO JR//////
let inicio:number = 0;
let fim:number=10;
let i = inicio;

for(i=inicio;i<=fim;i++){
    if(i % 2 == 0){
        console.log(i+',');
    }
}

while(inicio<=fim){
    if(inicio % 2 == 0){
        console.log(inicio+',');
    }  
    inicio++;
}
//FIM FABIOJR ///////////////

//Exercício 2
function loopInfinito() {
    let i = 0;
    while (i != 10) {
        i += 0.2;
    }
}
//A condição i igual a 10 jamais será verdadeira, causando um loop infinito.
//Isso se deve à representação de ponto flutuante para o tipo number possuir arredondamento.

//FABIOJR
//RESPOSTA -> Entra em estado de loop infinito
console.log('Return 02 => Entra em estado de loop infinito');
////////FIM

//Exercício 3
function min(x: number, y: number): number {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

//FABIOJR
function min(x:number,y:number):number{
    if (x<y){
        return x;
    }
        return y;
}
console.log('Return 03 => '+min(12,10));
/////FIM

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
//FABIO JR
function pow (x:number,y:number):number{
    if(y==0){
        return 1;
    }
    return x*pow(x,y-1);
}
console.log('Return 04 => '+pow(2,3));
//////////////FIM

//Exercício 5
function toMaiusculaPrimeira(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

//FABIOJR
const s:string = "treinaMENTO Dbserver";
function toMaiusculaPrimeira(s:string):string{
    return s.substring(0,1).toUpperCase()+s.substring(1,s.length).toLowerCase();
}
console.log('Return 05 => '+toMaiusculaPrimeira(s));
////////////FIM

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

//FABIOJR
const arr:number[] = [1,2,3,4,5,6,7,8,900,10,20,30,40,50,60,70,80,90,100,200];
function getMax(arr:number[]): number{
    let maior:number = arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>maior){
            maior=arr[i];
        }
    }
    return maior;
}

console.log('Return 06 => '+getMax(arr));
///////////////FIM

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