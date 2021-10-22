import express from "express";
import { json } from "body-parser";

const app = express();
const port = 3000;

app.use(json());

app.get("/", (req, res) => {
  res.send("Alô, mundo!");
});

app.get("/alo/:nome", (req, res) => {
  const nome = req.params.nome;
  res.send(`Alô, ${nome}!`);
});

app.post("/alo", (req, res) => {
  const {nome} = req.body;
  res.send(`Alô, ${nome}!`);
});

const server = app.listen(port, () => {
  console.log("App em http://localhost:3000/");
});

