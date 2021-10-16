import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export async function criar(autor: Autor): Promise<Autor> {
    return AutorModel.create(autor); //retorna uma Promise
}

export async function buscar(): Promise<Autor[]> {
    let consulta = AutorModel.find();
    return consulta.exec(); //retorna uma Promise
}