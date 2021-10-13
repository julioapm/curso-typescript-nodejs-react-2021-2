import { Cofrinho, Moeda } from './entidades';
import * as fs from 'fs';

export function salvarCofre(cofre: Cofrinho, nomeArquivo: string, callback: fs.NoParamCallback) {
    const json = JSON.stringify(cofre);
    fs.writeFile(nomeArquivo, json, callback);
}

export function lerCofre(nomeArquivo: string,
    callback: (err: Error | null, dados: Cofrinho | null) => void) {
    fs.readFile(nomeArquivo, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        }
        try {
            const obj = JSON.parse(data);
            const cofre = new Cofrinho();
            obj.moedas.forEach((m: any) => {
                cofre.adicionar(new Moeda(m.valor, m.nome));
            });
            callback(null, cofre);
        } catch (e:any) {
            callback(e, null);
        }
    });
}