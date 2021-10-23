import { connect, disconnect } from 'mongoose';
import { PessoaModel } from './pessoa';

const uri = 'mongodb+srv://dbUser:ZbXSO3nEaWd3aE86@cluster0.szsx0.mongodb.net/meubd?retryWrites=true&w=majority';
const urilocal = 'mongodb://localhost:27017';//aprender a conectar

async function main() {
    try {await connect(uri);
        console.log('Conectado ao Mongodb Atlas');
        /*
        //Inserir uma pessoa
        const documentoInserido =  await PessoaModel.create({
            nome: 'John Doe',
            idade: 25,
            email: 'jd@gmail.com'//não esquecer que o mongoose cria o _id e __v automaticamente
        });
        console.log('Inserido:');
        console.log(documentoInserido);
        */
        /*
        //Consultar todas as pessoas e retorna como documentos do mongodb
        const pessoas = await PessoaModel.find().exec();//find(retorna uma query)exec(executa o retorno de find)
        console.log('Resultado da consulta:');
        console.log(pessoas);//retorna um document
        //Consultar todas as pessoas e retorna como objetos simples
        const pessoas2 = await PessoaModel.find().lean();//find(retorna uma query)lean(retorna os dados em formato de objeto simples)
        console.log('Resultado da consulta pessoas2:');
        console.log(pessoas2);//retorna uma pessoa
        */
        /*
        const numero = await PessoaModel.where('idade').lte(18).countDocuments().exec();//encontre pessoa onde idade =< 18, conte quantos tem e execute
        console.log('Resultado da consulta:')
        console.log(numero);
        */
        /*
        //modificar um documento em memória e salvar no banco
        const documento = await PessoaModel.findById('61745786bb95b168dd544b28').exec();
        if( documento != null){
            documento.idade = 30;//se for menor que zero cai no catch e dá erro
            documento.email = 'outro@gmail.com';
            const documentoAtualizado = await documento.save();
            console.log('Resultado da alteração');
            console.log(documentoAtualizado);
            */
        /*
        //Remover um documento em memória e salvar no banco essa remoção
        const documento = await PessoaModel.findById('61745786bb95b168dd544b28').exec();
        if(documento != null){
            const documentoRemovido = await documento.remove();
            console.log('Resultado da remoção:');
            console.log(documentoRemovido)
        } 
        */

       
    } catch (error) {
        console.log('Falha no acesso ao BD');
        console.error(error);
    }   finally{
        await disconnect();
        console.log('Desconectado do MongoDB Atlas')
    }
}

main();





































/*import { connect, disconnect } from 'mongoose';
import { PessoaModel } from './pessoa';

const uri = 'mongodb+srv://dbUser:kil,ji8oku@cluster0.wszic.mongodb.net/meubd?retryWrites=true&w=majority';
const urilocal = 'mongodb://localhost:27017';

async function main() {
    try {
        await connect(uri);
        console.log('Conectado ao MongoDb Atlas');

        
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
        /*
        const numero = await PessoaModel.where('idade').lte(18).countDocuments().exec();
        console.log('Resultado da consulta:');
        console.log(numero);
        */
        /*
        //modificar um documento em memória e salvar no banco
        const documento = await PessoaModel.findById('6169c1832e17f3fc22b790f8').exec();
        if (documento != null) {
            documento.idade = 30;
            documento.email = 'outro@gmail.com';
            const documentoAtualizado = await documento.save();
            console.log('Resultado da alteração:');
            console.log(documentoAtualizado);
        }
        
        //remover um documento em memória e salvar no banco
        const documento = await PessoaModel.findById('6169c1832e17f3fc22b790f8').exec();
        if (documento != null) {
            const documentoRemovido = await documento.remove();
            console.log('Resultado da remoção:');
            console.log(documentoRemovido);
        }
    } catch (error) {
        console.log('Falha de acesso ao BD:');
        console.error(error);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();
*/