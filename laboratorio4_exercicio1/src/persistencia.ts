import { Cofrinho } from './entidades';
import * as fs from 'fs';

export function salvarCofre(cofre: Cofrinho, nomeArquivo: string) {
    const json = JSON.stringify(cofre);
    fs.writeFile(nomeArquivo, json, err => {
        if (err) throw err;
    });
}

export function lerCofre(nomeArquivo: string) {
    fs.readFile(nomeArquivo, 'utf8', (err, data) => {
        if (err) throw err;
        const cofre = JSON.parse(data);
        return cofre;
    });
}