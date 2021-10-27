import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

const app = express();
const port = 3000;

app.use(consoleLogger);
app.use(json());

app.get('/tata', (req, res) => {
    res.send('Tatá é o amor da vida do nickinho!');
})

app.get('/', (req, res) => {
    res.send('Helou!');
});

app.post('/alo', (req, res) => {
    const {nome} = req.body;
      if (nome) {
    res.send(`Bom dia ${nome}`);
    } else {
        res.status(400).send('Nome não informado!');
    }
})

const server = app.listen(port, () => {
    console.log(`Express na porta: ${port}`);
});

// Função de Middleware

function consoleLogger(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.path}`);
    next();
}