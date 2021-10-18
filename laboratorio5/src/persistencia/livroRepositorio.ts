import { Livro } from "../entidades/livro";
import { LivroModel } from "./livroModel";

export async function criar(livro: Livro): Promise<Livro> { //salvar ou armazenar
    return LivroModel.create(livro); //retorna uma Promise
}

export async function buscarTodos(): Promise<Livro[]> {
    //return LivroModel.find().exec();
    return LivroModel.find().populate('autores').exec();
}

export async function buscar(): Promise<Livro[]> {
    let consulta = LivroModel.find().sort('titulo');
    return consulta.exec(); //retorna uma Promise
}