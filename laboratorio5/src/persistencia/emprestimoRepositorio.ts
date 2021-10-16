import { Emprestimo } from "../entidades/emprestimo";
import { EmprestimoModel } from "./emprestimoModel";

export async function criar(emprestimo: Emprestimo): Promise<Emprestimo> {
    return EmprestimoModel.create(emprestimo);
}

export async function buscarTodos(): Promise<Emprestimo[]> {
  return EmprestimoModel.find().exec();
}