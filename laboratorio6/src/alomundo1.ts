//express-alo-mundo
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
    throw new Error('Erro inesperado');// middleware de tratamento de excessões padrão do express, o stacktrace do erro
})

const server = app.listen(port, ()=> {
console.log(` Express na porta ${port}`)
});

//função de middleware
function consoleLogger(req: Request, res: Response, next: NextFunction) {
    console.log(`${Date.now().toLocaleString()} ${req.method} ${req.path}`);
    next();
}

//Middleware com tratamento de excessões tem 4 parâmetros de entrada 
//Com o async chamar o next, na versão 5 n precisa mais fzr isso
