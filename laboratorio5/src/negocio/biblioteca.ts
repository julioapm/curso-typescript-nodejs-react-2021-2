import * as LivroRepositorio from '../persistencia/livroRepositorio';
import * as EmprestimoRepositorio from '../persistencia/emprestimoRepositorio';

export async function emprestarLivro(isbn: string) {
    const livro = await LivroRepositorio.buscaPorIsbn(isbn);
    if (livro === null){
        throw new Error("Livro não encontrado");
        
    }
}