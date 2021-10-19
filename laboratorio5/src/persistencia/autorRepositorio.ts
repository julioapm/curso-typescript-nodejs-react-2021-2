import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export async function criar(autor: Autor): Promise<Autor> { //salvar ou armazenar
    return AutorModel.create(autor); //retorna uma Promise
}

export async function buscar(): Promise<Autor[]> {
    let consulta = AutorModel.find().sort('ultimo_nome');
    return consulta.exec(); //retorna uma Promise
}

//3a Retornar array com autores com último nome informado
export async function buscarPorUltimoNome(ultimo_nome: string): Promise<Autor[]> {
    let consulta_ultimo = AutorModel.where('ultimo_nome').equals(ultimo_nome);
    return consulta_ultimo.exec(); //retorna uma Promise
}

//3b Retornar array com autores com primeiro nome informado
export async function buscarPorPrimeiroNome(primeiro_nome: string): Promise<Autor[]> {
    let consulta_primeiro = AutorModel.where('primeiro_nome').equals(primeiro_nome);
    return consulta_primeiro.exec();

}

//3c alterar registro de um autor
export async function alterarAutor(ObjectId: string, novoPrimeiroNome: string, novoUltimoNome:string): Promise<void> {
    let alteracao = await AutorModel.findById(ObjectId).exec();
    if (alteracao != null) {
        alteracao.primeiro_nome = novoPrimeiroNome;
        alteracao.ultimo_nome = novoUltimoNome;
        const alteracaoRealizada = await alteracao.save();
        console.log(alteracaoRealizada);
    };
}

export async function alterarAutorUpdate(filter: Object, update: Object): Promise<void> {
    await AutorModel.countDocuments(filter);

    let alteracao = await AutorModel.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true
    });
    alteracao.primeiro_nome;
        alteracao.ultimo_nome;
    }
