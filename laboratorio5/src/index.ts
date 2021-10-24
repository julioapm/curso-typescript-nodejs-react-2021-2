import { connect, disconnect } from 'mongoose';
import { AutorModel } from './persistencia/autorModel';
import * as AutorRepositorio from './persistencia/autorRepositorio';

const uri = 'mongodb+srv://yasmin:123senha123@cluster0.zeyfk.mongodb.net/myfirtLibrary?retryWrites=true&w=majority';

async function main() {
    try {
        const cliente = await connect(uri);
        console.log('Conectado ao MongoDb Atlas');

        console.log(`Adicionando autores...`);
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);


        const sobrenome = await AutorRepositorio.buscarPorSobrenome('Doe');
        console.log('Repositório onde o autor tem o sobrenome inserido: ');
        console.log(sobrenome);

        const nome = await AutorRepositorio.buscarPorNome('John');
        console.log('Repositório onde o autor tem o nome inserido: ');
        console.log(nome);

        const alteraNome = await AutorRepositorio.alteraAutor('6175565ae24f773f7f993020', 'Nicolás' , 'Fifi');
        console.log('O autor foi substituido por:');
        console.log(alteraNome);


    } catch (error) {
        console.log(`Erro: ${error}`);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();





































/*import { connect, disconnect } from 'mongoose';
import * as AutorRepositorio from './persistencia/autorRepositorio';
//import * as LivroRepositorio from './persistencia/livroRepositorio';
//import * as EmprestimoRepositorio from './persistencia/emprestimoRepositorio';

const uri = 'mongodb+srv://dbUser:yasmin,123senha123@cluster0.wszic.mongodb.net/meubd?retryWrites=true&w=majority';

async function main() {
    try {
        const cliente = await connect(uri);
        console.log('Conectado ao MongoDb Atlas');
        console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);
        /*
        console.log('Buscando autores...');
        let autores = await AutorRepositorio.buscar();
        autores.forEach(autor => console.log(autor));
        */
        /*
        let l1 = await LivroRepositorio.criar({
            titulo: 'Mongoose com Node.js',
            autores: [autores[0], autores[1]]
        });
        console.log(`Livro inserido: ${l1}`);
        */
        /*
        console.log('Buscando livros...');
        let livros = await LivroRepositorio.buscarTodos();
        livros.forEach(livro => console.log(livro));
        */
       /*
       let autores = await AutorRepositorio.buscarPorPrimeiroNome('John');
       console.log(autores);
       */
      /*
       const emprestimo = await EmprestimoRepositorio.buscarPorIsbn('111');
       console.log(emprestimo);
    } catch (error) {
        console.log(`Erro: ${error}`);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();
/**/