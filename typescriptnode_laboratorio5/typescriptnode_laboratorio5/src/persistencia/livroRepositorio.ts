import { Livro } from "../entidades/livro";
import { LivroModel } from "./livroModel";

export async function criar(livro: Livro): Promise<Livro> {
    return LivroModel.create(livro); //retorna uma Promise
}

export async function buscar(): Promise<Livro[]> {
    let consulta = LivroModel.find().sort('ultimo_nome').populate('autores');
    return consulta.exec(); //retorna uma Promise
}

export async function buscarOrdemPrimeiro(): Promise<Livro[]> {
    let consulta = LivroModel.find().sort('ultimo_nome');
    return consulta.exec(); //retorna uma Promise
}