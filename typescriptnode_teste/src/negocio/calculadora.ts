export function somar(a:number,b:number): number {
return a + b;
}

export async function somarAsync(a:number,b:number): Promise<number>{
    return a + b;
}

export function stringBinForNumber(binString: string): number {
    if (!/^[01]+$/.test(binString)) {
        throw new Error("Número binário inválido.");
    }
    return parseInt(binString, 2);
}

export function dobrar(a: number): number {
    return somar(a,a); //Relação de dependência entre funções (dobrar depende de somar) vai utilizar mocks para testar
}
