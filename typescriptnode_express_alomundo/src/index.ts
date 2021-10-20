import express from 'express';
import { json } from 'body-parser';

const app = express();
const port = 3000;

app.use(json());

app.get('/', (req, res) => {
    res.send('Alô, Mundo!');
});

app.get('/alo/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send(`Alô, ${nome}!`);
});

app.post('/alo', (req, res) => {
    const {nome} = req.body;
    res.send(`Alô, ${nome}!`);
});

const server = app.listen(port, () => {
    console.log(`Express na porta ${port}`);
});