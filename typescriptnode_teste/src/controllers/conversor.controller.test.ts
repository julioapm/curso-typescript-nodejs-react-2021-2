import { Conversor } from '../negocio/conversor';
import { getConversao } from './conversor.controller';
import {ConversorDTO } from './conversor.dto'
import supertest from 'supertest';
import app from '../app';

describe('conversor.controller', () => {
    describe('GET /api/conversor?moeda=USD&quantidade=1 getConversao() unitário', () => {
        const mockConversor = jest
        .spyOn(Conversor, 'converter')
        .mockResolvedValue(5.64)
        const resultadoEsperado: ConversorDTO = {
            moeda_origem: 'BRL',
            moeda_destino: 'USD',
            valor_conversao: 5.64
        }
        test('deve retornar conversão de 1 USD para BRL', async () => {
           const result = await supertest(app).get('/api/conversor?moeda=USD&quantidade=1');
           expect(result.status).toBe(200);
           expect(result.body).toEqual(resultadoEsperado);
           expect(mockConversor).toHaveBeenCalledWith('USD', 1);

        })
    })
})