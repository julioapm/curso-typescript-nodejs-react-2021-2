import {Emprestimo} from "../entidades/emprestimo";
import { EmprestimoModel } from "./emprestimoModel";

export async function criar(emprestimo: Emprestimo) : Promise<Emprestimo> {
    return EmprestimoModel.create(emprestimo);
     //salvar ou armazenar
    }
export async function buscarTodos(): Promise<Emprestimo[]> {
    //return LivroModel.find().exec();
    return EmprestimoModel.find().exec();
}
