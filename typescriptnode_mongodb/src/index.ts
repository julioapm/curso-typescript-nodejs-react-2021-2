import { MongoClient } from 'mongodb';
import { Pessoa } from './pessoa';

const uri = 'mongodb+srv://dbUser:kil,ji8oku@cluster0.wszic.mongodb.net/meubd?retryWrites=true&w=majority';
const cliente = new MongoClient(uri);

async function main() {
    try {
        await cliente.connect();
        console.log('Conectado ao MongoDb Atlas');

        const basededados = cliente.db('meubd');
        const colecao = basededados.collection<Pessoa>('pessoas');
    
        /*
        const pessoa: Pessoa = {
            nome: 'João',
            idade: 20
        };
        const resultado = await colecao.insertOne(pessoa);
        console.log(`Inserido: ${resultado.insertedId}`);
        */

        const pessoas = await colecao.find().toArray();
        console.log('Resultado da consulta:');
        console.log(pessoas);

        const numero = await colecao.find({idade: {$lte: 18}}).count();
        console.log('Resultado da consulta:');
        console.log(numero);

    } catch (error) {
        console.log('Falha de acesso ao BD:');
        console.error(error);
    } finally {
        await cliente.close();
    }
}

main();