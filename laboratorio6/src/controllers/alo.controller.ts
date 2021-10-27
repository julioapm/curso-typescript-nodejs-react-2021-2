import {Request, Response} from 'express';

export function getAlo(req: Request, res: Response){
    res.send('Alô, mundo');
}

export function getAloComParametro(req: Request, res: Response){
    const nome = req.params.nome;
    res.send(`Alô, ${nome}!`);
} 

export function postAlo(req: Request, res: Response){
    const {nome} = req.body;
    if(nome) {
        res.send(`Alô, ${nome}!`);
    } else {
        res.status(400).send('Nome é obrigatório')
    }
}

export function getAloErro(req: Request, res: Response) {
    throw new Error('Algo deu errado!');
}

