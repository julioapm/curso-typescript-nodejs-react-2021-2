import { ObjectId } from 'bson';
import { connect, Date, disconnect } from 'mongoose';
import * as AutorRepositorio from './persistencia/autorRepositorio';
import * as LivroRepositorio from './persistencia/livroRepositorio';
import * as EmprestimoRepositorio from './persistencia/emprestimoRepositorio';

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

        //fabio jr//////////////////////////////////////////////////////////
        console.log('Buscando autores primeiro_nome...');
        let autoresPrimeiroNome = await AutorRepositorio.buscarPrimeiro();
        autoresPrimeiroNome.forEach(autor => console.log(autor));

        console.log('Alterando autores');
        let alteraAutores = await AutorRepositorio.alterar('6169d7bf6b069e1d75df79f2','Marc','Luis');
        alteraAutores.forEach(autor => console.log(autor));

        console.log('Buscando Livros por autor...');
        let buscaLivrosAutor = await LivroRepositorio.buscarLivrosAutor('616aeef470113d296209a616');
        buscaLivrosAutor.forEach(livro => console.log(livro) );

        
        console.log('Adicionando Empréstimo...');
        const { ObjectId } = require('mongodb');
        const _id = ObjectId("616aef3a70113d296209a617");
        const data= new Date();
        var dtEntrega = new Date();
        dtEntrega.setDate(data.getDate() + 7); // Adiciona 7 dias
        let e1 = await EmprestimoRepositorio.criar({livro: _id, dataRetirada: data, dataEntrega: dtEntrega});
        console.log(`Empréstimo inserido: ${e1}`);

        console.log('Buscando emprestimos...');
        let emprestimos = await EmprestimoRepositorio.buscarTodos();
        emprestimos.forEach(emprestimo => console.log(emprestimo));


        console.log('Alterando emprestimos');
        const _idalt = ObjectId("616b0925f9dd8a1665e290a4");
        const _idaltLivro = ObjectId("616ab94c60015463647c2761");
        let dtAlterada = new Date();
        dtAlterada.setDate(data.getDate() - 1); // 1 dia atrás
        let dtEntregaalt = dtAlterada;
        dtEntregaalt.setDate(dtAlterada.getDate() + 7); // Adiciona 7 dias
        let alteraEmprestimos = await EmprestimoRepositorio.alterar(_idalt,_idaltLivro, dtAlterada ,dtEntregaalt);
        alteraEmprestimos.forEach(emprestimo => console.log(emprestimo));

        
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