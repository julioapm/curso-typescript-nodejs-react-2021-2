import { connect, disconnect, ObjectId } from 'mongoose';
import * as AutorRepositorio from './persistencia/autorRepositorio';
import * as LivroRepositorio from './persistencia/livroRepositorio';

const uri = 'mongodb+srv://dbUser:kil,ji8oku@cluster0.wszic.mongodb.net/meubd?retryWrites=true&w=majority';

async function main() {
    try {
        const cliente = await connect(uri);
        console.log('Conectado ao MongoDb Atlas');

       /* console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);*/
        
        console.log('Buscando autores...');
        let autores = await AutorRepositorio.buscar('Doe');
        //autores.forEach(autor => console.log(autor));
        console.log(autores);


       /* let livro1 = await LivroRepositorio.criar({titulo: "Node.js com Mongoose", autores: [autores[0], autores[1]]});
        console.log(livro1);*/
        //let livros = await LivroRepositorio.buscarTodos();
        //livros.forEach(livro => console.log(livro));



    } catch (error) {
        console.log(`Erro: ${error}`);  
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();