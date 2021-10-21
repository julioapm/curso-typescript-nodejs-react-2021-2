import express, {Request, Response, NextFunction} from "express";
import {json} from 'body-parser';


const app = express();
const port = 3000;

app.use(consoleLogger);
app.use(json());

app.get('/', (req,res)=> {
    res.send('Enviando algo')
});

app.get(`/alo/:nome`, (req, res) => {
    const nome = req.params.nome;
    res.send(`Viva, ${nome}`);
});

app.post(`/alo`, (req, res) => {
const {nome} = req.body;
if(nome){
    res.send(`Alô, ${nome}`)
} else {
    res.status(404).send(`Nome não informado`)
}
})

app.get('/erro', (req, res) => {
    throw new Error('Erro inesperado');
})

const server = app.listen(port, ()=> {
console.log(` Express na porta ${port}`)
});

//função de middleware
function consoleLogger(req: Request, res: Response, next: NextFunction) {
    console.log(`${Date.now().toLocaleString()} ${req.method} ${req.path}`);
    next();
}