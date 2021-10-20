import { Livro } from '../entidades/livro';
import { Emprestimo } from '../entidades/emprestimo';
import { Autor } from "../entidades/autor";

function  consultarLivros(){
    console.log('Buscando Livros por autor...');
    let buscaLivrosAutor = await LivroRepositorio.buscarTodos();
    buscaLivrosAutor.forEach(livro => console.log(livro) );
}

function emprestarLivro(id_livro){


} 
/*
– para criar um empréstimo caso o livro esteja disponível e marcar como 
data futura de entrega 7 dias a partir da data de empréstimo;
• 
*/

function devolverLivro(id_livro){


}
/*
– para efetuar a devolução de um livro e calcular o valor da multa associada 
caso a entrega do livro tenha sido realizada em uma data posterior à data prevista de entrega (defina
um valor qualquer de multa por dia de atraso)
*/