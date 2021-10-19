import fetch from "node-fetch";

async function main() {
  const uriBase = "https://jsonplaceholder.typicode.com";
  try {
    const resposta = await fetch(`${uriBase}/posts`);
    if (resposta.ok) {
      const dadosTexto = await resposta.text();
      console.log("Dados: ");
      console.log(dadosTexto);
    } else {
      console.log("GET status:", resposta.status);
      console.log("GET statusText:", resposta.statusText);
    }
  } catch (err) {
    console.log("Falha no acesso ao Web Service");
    console.log(err);
  }
}

main();
