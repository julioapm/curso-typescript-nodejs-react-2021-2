import { Request, Response } from 'express';

export function getAlo(req: Request, res: Response){
    res.send('Alô, Mundo!');
}

export function getAloComParametro(req:Request, res:Response){
    const nome = req.params.nome;
    res.send(`Alô, ${nome}!`);
}

export function postAlo(req: Request, res: Response) {
    const {nome} = req.body;
    if(nome) {
        res.send(`Alô, ${nome}!`);
    } else {
        res.status(400).send('Nome é obrigatório');
    }
}
 
export function getAloErro(req: Request, res: Response) {
    throw new Error('Algo deu errado!');
}





































/*import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export function getAlo(req: Request, res: Response) {
    res.send('Alô, Mundo!');
}

export function getAloComParametro(req: Request, res: Response) {
    const nome = req.params.nome;
    res.send(`Alô, ${nome}!`);
}

export function postAlo(req: Request, res: Response) {
    const {nome} = req.body;
    if (nome) {
        res.send(`Alô, ${nome}!`);
    } else {
        res.status(400).send('Nome é obrigatório');
    }
}

export function postAloValidado(req: Request, res: Response) {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        res.status(400).json({erros: erros.array()});
    } else {
        const {nome} = req.body;
        res.send(`Alô, ${nome}!`);
    }
}

export function getAloErro(req: Request, res: Response) {
    throw new Error('Algo deu errado!');
}
*/