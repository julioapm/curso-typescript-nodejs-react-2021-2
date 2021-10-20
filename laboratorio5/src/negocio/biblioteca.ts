import * as LivroRepositorio from '../persistencia/livroRepositorio';
import * as EmprestimoRepositorio from '../persistencia/emprestimoRepositorio';
import { Emprestimo } from '../entidades/emprestimo';

export async function emprestarLivro(isbn: string){
    const livro = await LivroRepositorio.buscarPorIsbn(isbn);
    if(livro==null){
        throw new Error('Livro não encontrado')
    }
    const emprestimo: Emprestimo = {
        livro:livro,
        dataRetirada: new Date(),
        dataEntrega: new Date(Date.now()+7*24*60*60*1000)
    };

    return 
 }
