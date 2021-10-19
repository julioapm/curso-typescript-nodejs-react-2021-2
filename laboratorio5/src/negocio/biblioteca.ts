import * as LivroRepositorio from '../persistencia/livroRepositorio';
import { Emprestimo } from '../entidades/emprestimo';
import * as EmprestimoRepositorio from '../persistencia/emprestimoRepositorio';

export async function emprestarLivro(isbn: string) {
    const livro = await LivroRepositorio.buscaPorIsbn(isbn);
    if (livro === null){
        throw new Error("Livro não encontrado");
    }
    //verificar se o livro está disponível
    //criar o empréstimo
    const emprestimo: Emprestimo = {
        livro: livro,
        dataRetirada : new Date(),
        dataEntrega : new Date(Date.now()+7*24*60*60*1000)
    };
    return EmprestimoRepositorio.criar(emprestimo);
}

