import { MongoClient, ObjectId } from "mongodb";
import { Pessoa } from "./pessoa";

const uri = "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/Teste?retryWrites=true&w=majority";
const cliente = new MongoClient(uri);

// Se conecta no banco de dados, se dar erro, a função imprime o erro (em ambos casos, a conexão com o banco é fechada)
async function main() {
  try {
    await cliente.connect();
    console.log("Conectado ao MongoDB Atlas");

    const baseDeDados = cliente.db("Teste");
    const colecao = baseDeDados.collection<Pessoa>("pessoas");

    const pessoa: Pessoa = {
      nome: "João",
      idade: 20,
    };

    // Adicionar na coleção (CREATE)
    const resultado = await colecao.insertOne(pessoa);
    console.log(`Inserido: ${resultado.insertedId}`);

    // Procurar elementos da coleção (READ)
    const pessoas = await colecao.find().toArray();
    console.log("Resultado da consulta:");
    console.log(pessoas);

    // Filtrando pessoas com menos de 18 anos (READ)
    const numero = await colecao.find({ idade: { $lte: 18 } }).count();
    console.log("Resultado da consulta:");
    console.log(numero);

    // Atualizar elementos da coleção (UPDATE)
    const resultadoAlteracao = await colecao.updateOne(
      { _id: new ObjectId("6168867e4a65d910c5db798a") }, // Documento que deseja alterar
      { $set: { idade: 18 } } // O que deseja alterar do documento, neste caso a idade que era 19, agora será atualizada para 18
    );
    console.log("Resultado da alteração:");
    console.log(resultadoAlteracao.modifiedCount);

    // Deletar elementos da coleção (DELETE)
    const resultadoExclusao = await colecao.deleteOne({ _id: new ObjectId("61688f044a65d910c5db798b")});
    console.log("Resultado da remoção:"); 
    console.log(resultadoExclusao.deletedCount);
    
  } catch (err) {
    console.log("Falha de acesso ao banco de dados:");
    console.log(err);

  } finally {
    await cliente.close();
  }
}

main();
