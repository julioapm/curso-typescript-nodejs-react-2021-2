import { Livro } from '../entidades/livro';
import { LivroModel } from './livroModel';

export async function criar(livro: Livro): Promise<Livro> {
    return LivroModel.create(livro);
}

export async function buscarTodos(): Promise<Livro[]> {
    return LivroModel.find().populate('autores').exec();
}

//FABIOJR
export async function buscarLivrosAutor(idAutor:string): Promise<Livro[]> {
    let consulta = LivroModel.where('autores').equals(idAutor).populate('autores');
    return consulta.exec(); //retorna uma Promise
}
