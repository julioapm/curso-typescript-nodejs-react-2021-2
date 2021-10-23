import {Autor} from './autor';

export interface Livro {
    isbn: string,
    titulo: string,
    autores: Autor[]
}