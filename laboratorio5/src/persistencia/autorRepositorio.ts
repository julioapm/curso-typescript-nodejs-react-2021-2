import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";
import { MongoClient, ObjectId } from 'mongodb';

export async function criar(autor: Autor): Promise<Autor> {
    return AutorModel.create(autor); //retorna uma Promise
}

export async function buscar(): Promise<Autor[]> {
    let consulta = AutorModel.find().sort('ultimo_nome');
    return consulta.exec(); //retorna uma Promise
}

//FABIOJR
export async function buscarPrimeiro(): Promise<Autor[]> {
    let consulta = AutorModel.find().sort('primeiro_nome');
    return consulta.exec(); //retorna uma Promise
}

export async function alterar(idautor : string, primeironome : string, ultimonome: string): Promise<Autor[]> {

    const documento = await AutorModel.findById(idautor).exec();
    if (documento == null) {
        return [];
    }
   
    documento.primeiro_nome = primeironome;
    documento.ultimo_nome = ultimonome;
    const documentoAtualizado = await documento.save();
    let consulta = AutorModel.find().sort('primeiro_nome');
    return consulta.exec(); //retorna uma Promise
}

