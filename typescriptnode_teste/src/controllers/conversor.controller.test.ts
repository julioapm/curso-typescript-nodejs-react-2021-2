import { Conversor } from '../negocio/conversor';
import { getConversao } from './conversor.controller';
import {ConversorDTO } from './conversor.dto'
import supertest from 'supertest';

describe('conversor.controller', () => {
    describe('getConversao() unitário', () => {
        const mockConversor = jest
        .spyOn(Conversor, 'converter')
        .mockResolvedValue(5.75)
        const resultadoEsperado: ConversorDTO = {
            moeda_origem: 'USD',
            moeda_destino: 'BRL',
            valor_conversao: 5.64
        }
        test('GET /api/conversor?moeda=USD&quantidade=1'/*deve retornar conversão de 1USD para BRL'*/, async () => {
            const resultado = await getConversao();
        })
    })
})