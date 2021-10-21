import { Livro } from "./livro";

export interface Emprestimo {
    livro: Livro,
    dataRetirada: Date,
    dataEntrega: Date
}
