import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod : MongoMemoryServer;//utilização do then pois a versão do JS n permite a utilizção do await aqui
MongoMemoryServer.create().then((server) => {
    mongod = server;
}). catch((err) => {
    console.log('Erro em tentar criar o bd')
    console.log(err);
})


//Conectar com o banco de dados em memória
export async function connect() {
    const uri = mongod.getUri();   
    await mongoose.connect(uri,(err) => {
        if(err) {
            console.log(err);
        }
    } )
    
}
//Desconectar com o banco de dados em memória

export async function disconnect() {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

// Limpar o banco de dados em memória

export async function clearDatabase(){
    const collections = mongoose.connection.collections;
    for(const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({})
    }
}