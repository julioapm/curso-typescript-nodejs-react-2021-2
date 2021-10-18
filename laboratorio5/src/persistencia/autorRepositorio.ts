import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export async function criar(autor: Autor): Promise<Autor> { //salvar ou armazenar
    return AutorModel.create(autor); //retorna uma Promise
}
//
export async function buscar(ultimo_nome: string): Promise<Autor[]> {
    let consulta = AutorModel.find().where('ultimo_nome').equals(ultimo_nome);
    return consulta.exec(); //retorna uma Promise
}

//3a Retornar array com autores com último nome informado
/*export async function buscarPorUltimoNome(ultimo_nome: string): Promise<Autor> {
    const consulta_ultimo =  AutorModel.find().where('ultimo_nome').exec();
    return consulta_ultimo;

}*/