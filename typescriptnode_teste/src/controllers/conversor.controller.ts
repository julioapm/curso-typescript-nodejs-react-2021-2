import { Request, Response , NextFunction } from 'express';
import { Conversor } from '../negocio/conversor';
import { ConversorDTO } from './conversor.dto';

//Formato que utilizado: .../conversor?||moeda=USD&quantidade=10|| query string
export async function getConversao(req: Request, res: Response, next: NextFunction) {
try {
        //ENTRADA
    const queryMoeda = req.query.moeda;
    const queryQuantidade = req.query.quantidade;

    if (queryMoeda && queryQuantidade) {
        const moeda = queryMoeda.toString();
        const quantidade = parseInt(queryQuantidade.toString());
        const result = await Conversor.converter(moeda, quantidade);
        //SAIDA
        const dto : ConversorDTO = {
            moeda_destino: moeda,
            moeda_origem: 'BRL',
            valor_conversao: result
        }
        res.json(dto);
    } else {
        res.status(400).send('Parâmetros inválidos')
    }
} catch (error) {
    next(error);
}
}