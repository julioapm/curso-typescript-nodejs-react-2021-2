import { MongoClient, ObjectId } from 'mongodb';
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

        const resultadoAlteracao = await colecao.updateOne({ _id : new ObjectId('616884326e1a81282ac2a1ee')}, { $set: { idade: 18 } });
        console.log('Resultado da alteração:');
        console.log(resultadoAlteracao.modifiedCount);

        const numero = await colecao.find({idade: {$lte: 18}}).count();
        console.log('Resultado da consulta:');
        console.log(numero);

        const resultadoExclusao = await colecao.deleteOne({ _id : new ObjectId('61688ef26e1a81282ac2a1ef')});
        console.log('Resultado da exclusão:');
        console.log(resultadoExclusao.deletedCount);

    } catch (error) {
        console.log('Falha de acesso ao BD:');
        console.error(error);
    } finally {
        await cliente.close();
    }
}

main();