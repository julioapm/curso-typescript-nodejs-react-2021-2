import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://dbUser:kil,ji8oku@cluster0.wszic.mongodb.net/meubd?retryWrites=true&w=majority';
const cliente = new MongoClient(uri);

async function main() {
    try {
        await cliente.connect();
        console.log('Conectado ao MongoDb Atlas');
    } catch (error) {
        console.log('Falha de acesso ao BD:');
        console.error(error);
    } finally {
        await cliente.close();
    }
}

main();