import { Moeda } from "../entidades/moeda";
import { MoedaModel } from "./moedaModel";

export class MoedaRepositorio {
  static async criar(moeda: Moeda): Promise<Moeda> {
    return MoedaModel.create(moeda);
  }
  static async buscar(): Promise<Moeda[]> {
    return MoedaModel.find().exec();
  }
  static async buscarPorCodigo(codigo: string): Promise<Moeda | null> {
    return MoedaModel.findOne({ codigo: codigo }).exec();
  }
}
