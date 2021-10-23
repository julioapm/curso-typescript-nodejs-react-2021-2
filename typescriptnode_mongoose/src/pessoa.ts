import { Schema, model } from "mongoose";

//Receita de bolo:
//Define interface
//Defina schema
//Define o model

//Estrutura do objeto
export interface Pessoa {//adiciona algo que pode ou não ser chamado no schema
    nome: string;//declaração do tipo do typescript(1)
    idade: number;
    email?: string;
}

//com ela define-se o objeto schema do mongoose
export const PessoaSchema = new Schema<Pessoa>({//não adiciona nada a interfaco pessoa, apenas recebe
    nome: {type: String, required: true, minlength: 1, maxlength: 50},//required torna obrigatório ter o nome
    idade: {type: Number, required: true, min: 0},//aqui, chamamos o construtor do tipo(2)
    email: String
});

//a partir do schema eu crio meu model
export const PessoaModel = model<Pessoa>('Pessoa', PessoaSchema, 'pessoas');


































/*import { Schema, model } from 'mongoose';

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

export const PessoaModel = model<Pessoa>('Pessoa', PessoaSchema, 'pessoas');*/