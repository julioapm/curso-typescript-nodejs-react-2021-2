import {somar, somarAsync, stringBinForNumber, dobrar} from './calculadora';

describe('somar', () => {
    test('1 + 2 é igual a 3', () => {
        expect(somar(1,2)).toBe(3);
    });
    test.each([[0,0,0], [0,1,1], [-1,0,-1], [-1,1,0]])
    ('%i + %i é igual a %i', (x: number, y: number, r:number) => {
            expect(somar(x,y)).toBe(r);
    })
});

describe('somarAsync', () => {
    test('1 + 1 é igual a 2', async () => {
        const result = await somarAsync(1,1);
        expect(result).toBe(2);
    });
})

describe('stringBinForNumber', () => {
    test('abc gera exceção Error', () => {
        expect(() => {
            stringBinForNumber('abc');
        }).toThrow(Error);
    })
})

describe('dobrar', () => {
        test('dobro de 2 é igual a 4', () => {
            jest.mock('./calculadora', () => {
                return {
                    somar: jest.fn().mockReturnValue(4) //utilizando mock function com uma função com relação de dependencia, Mocking Modules/Partials
                };
            });
            expect(dobrar(2)).toBe(4);
            // O spy substitui uma função por outra e retorna informações sobre ela
        });
});