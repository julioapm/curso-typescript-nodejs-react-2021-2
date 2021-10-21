import { connect, disconnect } from 'mongoose';
import * as AutorRepositorio from './persistencia/autorRepositorio';
import * as LivroRepositorio from './persistencia/livroRepositorio';

const uri= 'mongodb+srv://fabio:2010@cluster0.u9ema.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


async function main() {
    try {
        const cliente = await connect(uri);
        console.log('Conectado ao MongoDb Atlas');

        console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);

        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);

        console.log('Buscando autores...');
        let autores = await AutorRepositorio.buscar();
        autores.forEach(autor => console.log(autor));


        console.log('Adicionando livro...');
        let l1 = await LivroRepositorio.criar({titulo: 'Mongoose com nodejs', autores: [autores[0], autores[1]]});
        console.log(`Livro inserido: ${a1}`);
        
       // let l2 = await AutorRepositorio.criar({titulo: 'Mongoose com Angular',primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        //console.log(`Autor inserido: ${a2}`);

        console.log('Buscando livro...');
        let livros = await LivroRepositorio.buscar();
        livros.forEach(livro => console.log(livro));

        //const readline = required('readline');

    } catch (error) {
        console.log(`Erro: ${error}`);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();