import { dobrar, somar, somarAsync, stringBinParaNumber } from './calculadora';

describe('somar', () => {
    test('1 + 2 é igual a 3', () => {
        expect(somar(1, 2)).toBe(3);
    });
    test.each([[0,0,0],[0,1,1],[-1,0,-1],[-1,1,0]])
        ('%i + %i é igual a %i', (x: number, y: number, r: number) => {
            expect(somar(x, y)).toBe(r);
        });
});

describe('somarAsync', () =>{
    test('1 + 1 é igual 2', async () => {
        const resultado = await somarAsync(1, 1);
        expect(resultado).toBe(2);
    });
});

describe('stringBinParaNumber', () =>{
    test('abc gera exceção Error', () => {
        expect(() => {
            stringBinParaNumber('abc');
        }).toThrow(Error);
    });
});

