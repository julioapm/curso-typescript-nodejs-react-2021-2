import fetch from "node-fetch";
import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import { data } from "./dadoslivros";

// 1. Acesse o serviço REST https://reqres.in/ e escreva um pequeno programa que consuma o serviço. Mostre o
// acesso a URIs diferentes para as operações de GET/POST/PUT/PATCH/DELETE. Pelo menos uma das
// operações deve testar tanto o retorno com sucesso quanto com falha.

async function main() {
  const uriBase = "https://reqres.in";
  try {
    // Realizar um GET
    let id = 2;
    const respostaGET = await fetch(`${uriBase}/api/users/${id}`);
    if (respostaGET.ok) {
      const dadosJSON = await respostaGET.json();
      console.log("Dados: ");
      console.log(dadosJSON);
    } else {
      console.log("GET status:", respostaGET.status);
      console.log("GET statusText:", respostaGET.statusText);
    }

    // Realizar um POST
    let post = {
      name: "Bruno",
      job: "Desenvolvedor",
    };

    const respostaPOST = await fetch(`${uriBase}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    if (respostaPOST.ok) {
      const dadosJSON = await respostaPOST.json();
      console.log("Dados: ");
      console.log(dadosJSON);
    } else {
      console.log("POST status:", respostaPOST.status);
      console.log("POST statusText:", respostaPOST.statusText);
    }

    // Realizar um PUT (Objeto inteiro)
    let postDTO = {
      name: "Homem-Aranha",
      job: "Super-herói",
    };

    const respostaPUT = await fetch(`${uriBase}/api/users/2`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postDTO),
    });
    if (respostaPUT.ok) {
      const dadosJSON = await respostaPUT.json();
      console.log("Dados: ");
      console.log(dadosJSON);
    } else {
      console.log("PUT status:", respostaPUT.status);
      console.log("PUT statusText:", respostaPUT.statusText);
    }

    // Realizar um PATCH (Pode mudar apenas uma propriedade, não precisa ser o objeto inteiro)
    let patchID = 2;

    const respostaPATCH = await fetch(`${uriBase}/api/users/${patchID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Batman" }),
    });
    if (respostaPATCH.ok) {
      const dadosJSON = await respostaPATCH.json();
      console.log("Dados: ");
      console.log(dadosJSON);
    } else {
      console.log("PATCH status:", respostaPATCH.status);
      console.log("PATCH statusText:", respostaPATCH.statusText);
    }

    // Realizar um DELETE
    let deleteID = 2;

    const respostaDELETE = await fetch(`${uriBase}/api/users/${deleteID}`, {
      method: "DELETE",
    });
    if (respostaDELETE.ok) {
      console.log("DELETE efetuado com sucesso");
    } else {
      console.log("DELETE status:", respostaDELETE.status);
      console.log("DELETE statusText:", respostaDELETE.statusText);
    }
  } catch (err) {
    console.log("Falha no acesso ao Web Service");
    console.log(err);
  }
}

main();

// 2. Retome o exercício do Laboratório 5 sobre o sistema de biblioteca. Projete uma API de Web Service REST
// para expor operações de negócio sobre esta base de dados da Biblioteca. Siga o seguinte exemplo:

// Verbo: GET
// URI: /livros/{id}
// Entrada: identificador do livro como String
// Retorno:
// - 200 OK com objeto contendo os dados de um livro serializado em JSON
// - 404 Not Found se o livro não existe
// - 500 Internal Server Error no caso de falha de processamento do servidor

// 3. Implemente o Serviço Web projetado no exercício anterior. Procure seguir um modelo de implementação
// de acordo com o padrão apresentado em sala de aula.

const app = express();
const port = 3000;
const uri = "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/Teste?retryWrites=true&w=majority";

mongoose.connect(uri);

app.use(json());

app.get("/livros", (req, res) => {
  res.send(data);
});

app.get("/livros/:id", (req, res) => {
  const idLivro = parseInt(req.params.id);
  res.send(data[idLivro - 1]);
});

const server = app.listen(port, () => {
  console.log("App em http://localhost:3000/");
});

// 4. Acesse a documentação do pacote “express-generator-typescript” 
// (https://www.npmjs.com/package/express-generator-typescript) e responda: 

// a) Quais são as dependências configuradas no projeto template? Qual o propósito de cada uma? 
// As dependências configuradas são o 'edit-json-file' e o 'ncp', o propósito da edit-json-file é editar
// um arquivo .json com facilidade, podendo mudar dados e salvar, já o ncp tem o objetivo de realizar
// a cópia recursiva assíncrona de arquivos e diretórios.

// b) Quais módulos de middleware foram utilizados e qual o propósito de cada um? Procure observar que as 
// funcionalidades adicionais estão trabalhando como complementares ao framework Express. 
// Foi utilizado o 'body-parser', seu propósito é analisar os corpos das solicitações recebidas em um 
// middleware antes de seus 'handlers'.

// c) Abra o arquivo “package.json” e observe os scripts da aplicação. O que é ESLINT? Qual o seu propósito?
// O ESLint analisa estaticamente seu código para encontrar problemas rapidamente. ESLint é integrado à 
// maioria dos editores de texto, além de muitos problemas encontrados pelo ESLint podem ser corrigidos 
// automaticamente, sendo assim, a ferramenta melhora a qualidade do código e garante que a estrutura 
// do código permaneça consistente e fácil de ler.