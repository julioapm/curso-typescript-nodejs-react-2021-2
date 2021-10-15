import { Schema, model } from 'mongoose';

export interface Pessoa {
    nome: string;
    idade: number;
    email?: string;
}

export const PessoaSchema = new Schema<Pessoa>({
    nome: {type: String, required: true, minlength: 1, maxlength: 50},
    idade: {type: Number, required: true, min: 0},
    email: String
});

export const PessoaModel = model<Pessoa>('Pessoa', PessoaSchema, 'pessoas');