import { connect, disconnect } from "mongoose";
import * as AutorRepositorio from "./persistencia/autorRepositorio";
import * as LivroRepositorio from "./persistencia/livroRepositorio";
import * as EmprestimoRepositorio from "./persistencia/emprestimoRepositorio";

const uri = "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/Teste?retryWrites=true&w=majority";

async function main() {
  try {
    const cliente = await connect(uri);
    console.log("Conectado ao MongoDb Atlas");

    // console.log('Adicionando autores...');
    // let a1 = await AutorRepositorio.criar({primeiro_nome: 'José', ultimo_nome: 'Monteiro Lobato'});
    // console.log(`Autor inserido: ${a1}`);
    // let a2 = await AutorRepositorio.criar({primeiro_nome: 'José', ultimo_nome: 'de Alencar'});
    // console.log(`Autor inserido: ${a2}`);

    console.log("Buscando autores...");
    let autores = await AutorRepositorio.buscar();
    autores.forEach((autor) => console.log(autor));

    // let l1 = await LivroRepositorio.criar({
    //   titulo: "Iracema",
    //   autores: [autores[3]],
    // });
    // console.log(`Livro inserido: ${l1}`);

    // let l2 = await LivroRepositorio.criar({
    //     titulo: "Mongoose com Angular",
    //     autores: [{primeiro_nome: "Bruno", ultimo_nome: "Machado"}],
    //   });
    //   console.log(`Livro inserido: ${l2}`);

    // console.log("Buscando livros...");
    // let livros = await LivroRepositorio.buscarTodos();
    // livros.forEach(livro => console.log(livro));

    // EMPRÉSTIMOS

    // console.log('Adicionando empréstimo...');
    // let e1 = await EmprestimoRepositorio.criar({livro: l1, dataRetirada: new Date(2021,10,15), dataEntrega: new Date(2021,10,22)});
    // console.log(`Empréstimo inserido: ${e1}`);

    console.log("Buscando empréstimos...");
    let emprestimos = await EmprestimoRepositorio.buscarTodos();
    emprestimos.forEach(emprestimo => console.log(emprestimo));
    
    // console.log("Alterando dados do empréstimo...");

  } catch (error) {
    console.log(`Erro: ${error}`);
  } finally {
    await disconnect();
    console.log("Desconectado do MongoDb Atlas");
  }
}

main();
