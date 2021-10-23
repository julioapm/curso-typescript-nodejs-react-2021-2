import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export async function criar(autor: Autor): Promise<Autor> {
    return AutorModel.create(autor); //retorna uma Promise
}

export async function buscar(): Promise<Autor[]> {
    let consulta = AutorModel.find().sort('ultimo_nome');
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorPrimeiroNome(nome: string): Promise<Autor[]> {
    let consulta = AutorModel.where('primeiro_nome').equals(nome);
    return consulta.exec(); //retorna uma Promise
}