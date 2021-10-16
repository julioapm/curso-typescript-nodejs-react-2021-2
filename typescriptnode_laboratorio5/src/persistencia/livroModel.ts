import { Livro } from "../entidades/livro";
import { model, Schema, SchemaTypes, Model } from "mongoose";

const LivroSchema = new Schema<Livro>({
    titulo: { type: String, required: true },
    autores: [{ type: SchemaTypes.ObjectId, ref: 'Autor' }]
});

export const LivroModel = model<Livro>('Livro', LivroSchema, 'livros');