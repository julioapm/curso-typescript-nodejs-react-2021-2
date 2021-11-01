import {Moeda} from "../entidades/moeda";
import { MoedaModel } from './moedaModel';
import { MoedaRepositorio } from './moedaRepositorio';
import * as dbhandler from '../util/dbhandler';

//Conectar com o banco de dados antes de qualquer teste
beforeAll(async () => {
    jest.setTimeout(600000);
    await dbhandler.connect();
});

//Limpar o banco de dados depois de cada teste
afterEach(async () => {
    await dbhandler.clearDatabase();
});

//Desconectar do banco de dados após todos os testes
afterAll(async () => {
    await dbhandler.disconnect();
})

describe('MoedaRepositorio', () => {
    const moedaDeTeste: Moeda = {
            codigo: 'USD',
            nome: 'Dólar dos EUA',
            cotacao: 5.68
        };
    describe('criar() integração', () => {
        test('deve inserir moeda sem erro', async () => {
            expect(async () => {
                await MoedaRepositorio.criar(moedaDeTeste);
            }).not.toThrow();
        });
       test('deve inserir moeda e obter objeto inserido no bd', async () => {
        const moedaInserida = await MoedaRepositorio.criar(moedaDeTeste);
        expect(moedaInserida.codigo).toBe(moedaDeTeste.codigo);
        expect(moedaInserida.nome).toBe(moedaDeTeste.nome);
        expect(moedaInserida.cotacao).toBe(moedaDeTeste.cotacao);
       });
    });
    describe('buscar() integração', () => {
        test('deve retornar uma coleção vazia', async() => {
            const moedas = await MoedaRepositorio.buscar();
            expect(moedas).toBeDefined();
            expect(moedas).toHaveLength(0);
       })
        test('deve retornar uma coleção com 2 elementos', async() => {
            const moedas = await MoedaRepositorio.buscar();
            expect(moedas).toBeDefined();
            expect(moedas).toHaveLength(2);
       })
    })
})

async function seedMoedas() {
    await MoedaModel.create({
         codigo: 'USD',
         nome: 'Dólar dos EUA',
         cotacao: 5.68
    })
    await MoedaModel.create({
         codigo: 'EUR',
         nome: 'Euro',
         cotacao: 6.58
    })
}