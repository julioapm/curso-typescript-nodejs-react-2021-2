import app from './app';
import { connect } from 'mongoose';

async function main() {
    try {
        const urlMongoDB = process.env.MONGO_URL || 'mongodb://localhost:27017'; //não tenho instalação local do mongodb logo esse ou com o localhost nem faz sentido, mas vou deixar ai pra registrar
        await connect(urlMongoDB);
        console.log('Conectado ao MongoDB')
        app.listen(app.get('port'), () => {
        console.log('listening on port', app.get('port'));
        console.log('listening on mode', app.get('env'));
    })
        
    } catch (error) {
        console.log('Erro ao iniciar o servidor', error);
    }
}

main();