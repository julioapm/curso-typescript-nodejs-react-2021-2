import { Moeda } from '../entidades/moeda';
import { model, Schema } from 'mongoose';

const MoedaSchema = new Schema<Moeda>({
    codigo: {type: String, required: true},
    nome: {type: String, required: true},
    cotacao: {type: Number, required: true}
});

export const MoedaModel = model<Moeda>('Moeda', MoedaSchema, 'moedas');
