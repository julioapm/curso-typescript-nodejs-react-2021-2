import { MongoClient, ObjectId } from 'mongodb';
import { Pessoa } from './pessoa';

const uri = 'mongodb+srv://laranjinha:oRange@cluster0.ooj0o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const cliente = new MongoClient(uri);

async function main() {
    try {
        await cliente.connect();
        console.log('Conectado ao MongoDb Atlas');

        const basededados = cliente.db('meubd');
        const colecao = basededados.collection<Pessoa>('pessoas');
    
        
        /*const pessoa: Pessoa = {
            nome: 'Daniel',
            idade: 20
        };

        const resultado = await colecao.insertOne(pessoa);*/
        
        const numero = await colecao.find( {idade: {$lte: 20}}).count();
        console.log(numero);
        
        const resultadoAlteracao = await colecao.updateOne({_id: new ObjectId("616b90c9cb7b9cf5ac6dd2ad")}, {$set: {idade: 18}});
        console.log(resultadoAlteracao.modifiedCount);
        
        const pessoas = await  colecao.find().toArray();
        console.log(pessoas);

        const resultadoRemocao = await colecao.deleteOne({_id: new ObjectId("616b90c9cb7b9cf5ac6dd2ad")});
        console.log(resultadoRemocao.deletedCount);

    } catch (error) {
        console.log('Falha de acesso ao BD:');
        console.error(error);
    } finally {
        await cliente.close();
    }
}

main();