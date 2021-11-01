import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

class InMemoryDbConnection {
    private mongoServer?: MongoMemoryServer;
    private static mongoConnection: InMemoryDbConnection;

    public static getInstance(): InMemoryDbConnection {
        if (!InMemoryDbConnection.mongoConnection) {
            InMemoryDbConnection.mongoConnection = new InMemoryDbConnection();
        }
        return InMemoryDbConnection.mongoConnection;
    }

    public async open() {
        try {
            this.mongoServer = await MongoMemoryServer.create();
            const uri = this.mongoServer.getUri();
            await mongoose.connect(uri);
        } catch (error) {
            console.log('InMemoryDbConnection.open: ', error);
            throw error;
        }
    }

    public async clear() {
        try {
            const collections = mongoose.connection.collections;
            for (const key in collections) {
                const collection = collections[key];
                await collection.deleteMany({});
            }
        } catch (error) {
            console.log('InMemoryDbConnection.clear: ', error);
            throw error;
        }
    }

    public async close() {
        try {
            await mongoose.connection.dropDatabase();
            await mongoose.disconnect();
            if (this.mongoServer) {
                await this.mongoServer.stop();
            }
        } catch (error) {
            console.log('InMemoryDbConnection.close: ', error);
            throw error;
        }
    }
}

export default InMemoryDbConnection.getInstance();

/*import {MongoMemoryServer} from 'mongodb-memory-server';
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
}*/