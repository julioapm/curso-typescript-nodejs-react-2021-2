//FABIOJR
import { ObjectID } from 'bson';
import { Emprestimo } from '../entidades/emprestimo';
import { Livro } from '../entidades/livro';
import { EmprestimoModel } from './emprestimoModel';



export async function criar(emprestimo: Emprestimo): Promise<Emprestimo> {
    return EmprestimoModel.create(emprestimo);
}

export async function buscarTodos(): Promise<Emprestimo[]> {
    return EmprestimoModel.find().exec();
}


export async function alterar(idEmprestimo : string, idLivro: Livro, dtRetirada : Date, dtEntrega: Date): Promise<Emprestimo[]> {

    const documento = await EmprestimoModel.findById(idEmprestimo).exec();
    if (documento == null) {
        return [];
    }
   
    documento.livro = idLivro;
    documento.dataRetirada = dtRetirada;
    documento.dataEntrega = dtEntrega;
    const documentoAtualizado = await documento.save();
    let consulta = EmprestimoModel.find().sort('dataEntrega');
    return consulta.exec(); //retorna uma Promise
}

