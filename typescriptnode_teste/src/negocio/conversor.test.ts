import {Moeda} from '../entidades/moeda';
import {MoedaRepositorio} from '../persistencia/moedaRepositorio';
import { Conversor } from './conversor';

describe('Conversor', () => {
    describe('converter() teste unitário', () => {
        //Resultado esperado
        const moedaCodigo = 'USD';
        const moedaEsperada: Moeda = {
            codigo: 'USD',
            nome: 'Dólar dos EUA',
            cotacao: 5.64
        };
        const valorParaConversao = 1;
        const valorEsperado = 5.64;
        // Mock do repositorio
        const mockMoedaRepositorioBuscaPorCodigo = jest
            .spyOn(MoedaRepositorio, 'buscaPorCodigo')
            .mockResolvedValue(moedaEsperada);
        // Testes
        test('deve converter 1 USD para BRL', async()=> {
            const valorParaConversao = 1;
            const valorEsperado = 5.64;
            const result = await Conversor.converter(moedaCodigo, valorParaConversao);
            expect(result).toBeCloseTo(valorEsperado);
            expect(mockMoedaRepositorioBuscaPorCodigo).toHaveBeenCalledWith(moedaCodigo);
        });
    })
})

//Tarefa: Fazer um teste para Erro utilizando uma moeda inexistente.