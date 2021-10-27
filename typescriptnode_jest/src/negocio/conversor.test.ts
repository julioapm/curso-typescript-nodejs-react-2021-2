import { Moeda } from '../entidades/moeda';
import { MoedaRepositorio } from '../persistencia/moedaRepositorio';
import { Conversor } from './conversor';

describe('Conversor', () => {
    describe('converter() teste unitário', () => {
        //Valores e resultado esperado
        const codigoMoeda = 'USD';
        const moedaEsperada: Moeda = {
            codigo: 'USD',
            nome: 'Dólar dos EUA',
            cotacao: 5.57
        };
        //Mock do repositório
        const mockMoedaRepositorioBuscarPorCodigo = jest
            .spyOn(MoedaRepositorio, 'buscarPorCodigo')
            .mockResolvedValue(moedaEsperada);
        //Testes
        test('deve converter 1 USD para BRL', async () => {
            const valorParaConversao = 1;
            const valorEsperado = 5.57;
            const resultado = await Conversor.converter(codigoMoeda, valorParaConversao);
            expect(resultado).toBeCloseTo(valorEsperado);
            expect(mockMoedaRepositorioBuscarPorCodigo).toHaveBeenCalledWith(codigoMoeda);
        });
        test('deve converter 10 USD para BRL', async () => {
            const valorParaConversao = 10;
            const valorEsperado = 55.7;
            const resultado = await Conversor.converter(codigoMoeda, valorParaConversao);
            expect(resultado).toBeCloseTo(valorEsperado);
            expect(mockMoedaRepositorioBuscarPorCodigo).toHaveBeenCalledWith(codigoMoeda);
        });
    });
});