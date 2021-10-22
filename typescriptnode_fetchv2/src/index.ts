import fetch from "node-fetch";
import { PostDTO } from "./dtos";

async function main() {
  const uriBase = "https://jsonplaceholder.typicode.com";
  try {

    // Realizar um GET
    let id = 1;
    const respostaGET = await fetch(`${uriBase}/posts/${id}`);
    if (respostaGET.ok) {
      const dadosJSON: PostDTO = await respostaGET.json();
      console.log("Dados: ");
      console.log(dadosJSON.title);
    } else {
      console.log("GET status:", respostaGET.status);
      console.log("GET statusText:", respostaGET.statusText);
    }

    // Realizar um POST
    let post: PostDTO = {
      userId: 1,
      title: "Teste de POST request pelo VSCode",
      body: "Corpo de exemplo do request",
    };

    const respostaPOST = await fetch(`${uriBase}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    });
    if (respostaPOST.ok) {
      const dadosJSON: PostDTO = await respostaPOST.json();
      console.log("Dados: ");
      console.log(dadosJSON);
    } else {
      console.log("POST status:", respostaPOST.status);
      console.log("POST statusText:", respostaPOST.statusText);
    }

    // Realizar um PUT (Objeto inteiro)
    let postDTO: PostDTO = {
      id: 1,
      userId: 1,
      title: "Teste de PUT request pelo VSCode",
      body: "Corpo de exemplo do request",
    };

    const respostaPUT = await fetch(`${uriBase}/posts/${postDTO.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postDTO)
    });
    if (respostaPUT.ok) {
      const dadosJSON: PostDTO = await respostaPUT.json();
      console.log("Dados: ");
      console.log(dadosJSON);
    } else {
      console.log("PUT status:", respostaPUT.status);
      console.log("PUT statusText:", respostaPUT.statusText);
    }

    // Realizar um PATCH (Pode mudar apenas uma propriedade, não precisa ser o objeto inteiro)
    let patchID = 1;

    const respostaPATCH = await fetch(`${uriBase}/posts/${patchID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Teste de PATCH request" }),
    });
    if (respostaPATCH.ok) {
      const dadosJSON: PostDTO = await respostaPATCH.json();
      console.log("Dados: ");
      console.log(dadosJSON);
    } else {
      console.log("PATCH status:", respostaPATCH.status);
      console.log("PATCH statusText:", respostaPATCH.statusText);
    }

    // Realizar um DELETE
    let deleteID = 1;

    const respostaDELETE = await fetch(`${uriBase}/posts/${deleteID}`, {
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
