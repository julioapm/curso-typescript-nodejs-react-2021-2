import { EmprestimoModel } from './emprestimoModel';
import { Emprestimo } from '../entidades/emprestimo';

export async function criar(emprestimo: Emprestimo): Promise<Emprestimo> {
    return EmprestimoModel.create(emprestimo);
}

export async function buscarPorIsbn(isbn: string): Promise<Emprestimo[]> {
    //???
}