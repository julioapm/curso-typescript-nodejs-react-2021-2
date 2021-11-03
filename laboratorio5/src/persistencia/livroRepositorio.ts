import { Livro } from "../entidades/livro";
import { LivroModel } from "./livroModel";
import { AutorModel } from "./autorModel";
//4a
export async function criar(livro: Livro): Promise<Livro> { //salvar ou armazenar
    return LivroModel.create(livro); //retorna uma Promise
}
//4b
export async function buscarTodos(): Promise<Livro[]> {
    //return LivroModel.find().exec();
    return LivroModel.find().populate({path:'autores', model:AutorModel}).exec();
}
//4c
export async function buscarLivroAutor(ObjectId: string): Promise<Livro[]> {
    let consulta = LivroModel.where('autores').equals(ObjectId);
    return consulta.exec(); //retorna uma Promise
}

/*export async function buscaPorIsbn(isbn: string): Promise<Livro|null> {
    return LivroModel.findOne{{isbn}}.populate({path:'autores', model:AutorModel}).exec();
}*/