import { Moeda } from '../entidades/moeda';
import { MoedaRepositorio } from '../persistencia/moedaRepositorio';

export class Conversor {
    static async converter(codigoMoeda: string, quantidade: number): Promise<number> {
        const moeda = await MoedaRepositorio.buscarPorCodigo(codigoMoeda);
        if (moeda) {
            return quantidade * moeda.cotacao;
        }
        throw new Error('Código de moeda inexistente');
    }
    static async listarMoedas(): Promise<Moeda[]> {
        return await MoedaRepositorio.buscar();
    }
}