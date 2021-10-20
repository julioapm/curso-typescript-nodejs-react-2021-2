import { Livro } from '../entidades/livro';
import { LivroModel } from './livroModel';
import { AutorModel } from './autorModel';

export async function criar(livro: Livro): Promise<Livro> {
    return LivroModel.create(livro);
}

export async function buscarTodos(): Promise<Livro[]> {
    return LivroModel.find().populate({path:'autores', model:AutorModel}).exec();
}

export async function buscarPorIsbn(isbn: string): Promise<Livro|null> {
    return LivroModel.findOne({isbn}).populate({path:'autores', model:AutorModel}).exec();
};