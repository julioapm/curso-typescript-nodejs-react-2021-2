import { connect, disconnect } from 'mongoose';
import * as AutorRepositorio from './persistencia/autorRepositorio';
import * as LivroRepositorio from './persistencia/livroRepositorio';

//const uri = 'mongodb+srv://dbUser:kil,ji8oku@cluster0.wszic.mongodb.net/meubd?retryWrites=true&w=majority';
const uri = 'mongodb+srv://fabio:2010@cluster0.u9ema.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function main() {
    try {
        const cliente = await connect(uri);
        console.log('Conectado ao MongoDb Atlas');
        /*
        console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);
        */
        console.log('Buscando autores...');
        let autores = await AutorRepositorio.buscar();
        autores.forEach(autor => console.log(autor));

        //fabio jr
        console.log('Buscando autores primeiro_nome...');
        let autoresPrimeiroNome = await AutorRepositorio.buscarPrimeiro();
        autoresPrimeiroNome.forEach(autor => console.log(autor));

        console.log('Alterando autores');
        let alteraAutores = await AutorRepositorio.alterar('6169d7bf6b069e1d75df79f2','Marc','Luis');
        alteraAutores.forEach(autor => console.log(autor));

        //fim
        /*
        let l1 = await LivroRepositorio.criar({
            titulo: 'Mongoose com Node.js',
            autores: [autores[0], autores[1]]
        });
        console.log(`Livro inserido: ${l1}`);
        */

        console.log('Buscando livros...');
        let livros = await LivroRepositorio.buscarTodos();
        livros.forEach(livro => console.log(livro));

    } catch (error) {
        console.log(`Erro: ${error}`);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();