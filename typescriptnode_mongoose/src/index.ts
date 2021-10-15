import { connect, disconnect } from 'mongoose';
import { PessoaModel } from './pessoa';

const uri = 'mongodb+srv://dbUser:kil,ji8oku@cluster0.wszic.mongodb.net/meubd?retryWrites=true&w=majority';

async function main() {
    try {
        await connect(uri);
        console.log('Conectado ao MongoDb Atlas');

        /*
        //inserir uma pessoa
        const documentoInserido = await PessoaModel.create({
            nome: 'John Doe',
            idade: 25,
            email: 'jd@gmail.com'
        });
        console.log('Inserido:');
        console.log(documentoInserido);
        */
        /*
        //consultar todas as pessoas como documentos
        const pessoas = await PessoaModel.find().exec();
        console.log('Resultado da consulta:');
        console.log(pessoas);
        //consultar todas as pessoas como objetos simples
        const pessoas2 = await PessoaModel.find().lean();
        console.log('Resultado da consulta:');
        console.log(pessoas2);
        */
        const numero = await PessoaModel.where('idade').lte(18).countDocuments().exec();
        console.log('Resultado da consulta:');
        console.log(numero);
    } catch (error) {
        console.log('Falha de acesso ao BD:');
        console.error(error);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();