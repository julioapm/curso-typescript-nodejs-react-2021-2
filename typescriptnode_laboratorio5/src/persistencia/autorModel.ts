import { Autor } from "../entidades/autor";
import { model, Schema } from 'mongoose';

const AutorSchema = new Schema<Autor>({
    primeiro_nome: { type: String, required: true, max: 100 },
    ultimo_nome: { type: String, required: true, max: 100 }
});

export const AutorModel = model<Autor>('Autor', AutorSchema, 'autores');