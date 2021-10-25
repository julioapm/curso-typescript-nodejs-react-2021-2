import { Emprestimo } from "../entidades/emprestimo";
import { Schema, model, SchemaTypes } from "mongoose";

const EmprestimoSchema = new Schema<Emprestimo>({
    livro: { type: SchemaTypes.ObjectId, ref: 'Livro', required: true },
    dataRetirada: { type: Date, default: new Date() },
    dataEntrega: { type: Date }
});

export const EmprestimoModel = model<Emprestimo>('Emprestimo', EmprestimoSchema, 'emprestimos');