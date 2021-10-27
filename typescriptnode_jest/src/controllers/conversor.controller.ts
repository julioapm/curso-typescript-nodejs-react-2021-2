import { Request, Response, NextFunction } from 'express';
import { Conversor } from '../negocio/conversor';
import { ConversaoDTO } from './conversao.dto';

export async function getConversao(req: Request, res: Response, next: NextFunction) {
    try {
        const queryMoeda = req.query.moeda;
        const queryQuantidade = req.query.quantidade;
        if (queryMoeda && queryQuantidade) {
            const moeda = queryMoeda.toString();
            const quantidade = parseFloat(queryQuantidade.toString());
            const resultado = await Conversor.converter(moeda, quantidade);
            const dto: ConversaoDTO = {
                moeda_origem: moeda,
                moeda_destino: 'BRL',
                valor_conversao: resultado
            };
            res.json(dto);
        } else {
            res.status(400).send('Parâmetros inválidos.');
        }
    } catch (error) {
        next(error);
    }
}