import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export async function criar(autor: Autor): Promise<Autor> {
    return AutorModel.create(autor); //retorna uma Promise
}

export async function buscar(): Promise<Autor[]> {
    let consulta = AutorModel.find();
    return consulta.exec(); 
}

export async function buscarPorSobrenome(sobrenome: string): Promise<Autor[]> {
    let consultaAutor = AutorModel.find().where({ ultimo_nome: sobrenome });
    return consultaAutor.exec();
}

export async function buscarPorNome(nome: string): Promise<Autor[]> {
    let consultaAutor = AutorModel.find().where({ primeiro_nome: nome });
    return consultaAutor.exec();
}

export async function alteraAutor(id: string, nome?: string, sobrenome?: string) {
    if (nome && sobrenome) {
        let alteraAutor = await AutorModel.where({ _id: id }).updateOne({ primeiro_nome: nome, ultimo_nome: sobrenome }).exec();
        return await AutorModel.findById(id).exec();
    } else if (nome == undefined) {
        let alteraAutor = AutorModel.where({ _id: id }).updateOne({ ultimo_nome: sobrenome });
        return await AutorModel.findById(id).exec();;
    } else if (sobrenome == undefined) {
        let alteraAutor = AutorModel.where({ _id: id }).updateOne({ primeiro_nome: nome});
        return await AutorModel.findById(id).exec();
    } else {
        return console.log("Perdão, não conseguimos :(");
    }
}