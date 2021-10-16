import { connect, disconnect } from "mongoose";
import { PessoaModel } from "./pessoa";

const uri = "mongodb+srv://dbUser:bruno2308@cluster0.yoorm.mongodb.net/Teste?retryWrites=true&w=majority";
const urilocal = "mongodb://localhost:27017";

async function main() {
  try {
    await connect(uri);
    console.log("Conectado ao MongoDB Atlas");

    // Inserir pessoa (CREATE)
    const documentoInserido = await PessoaModel.create({
      nome: "John Doe",
      idade: 25,
      email: "jd@gmail.com",
    });
    console.log("Inserido:");
    console.log(documentoInserido);

    // Consultar todas as pessoas (READ)
    const pessoas = await PessoaModel.find().exec();
    console.log("Encontrados:");
    console.log(pessoas);

    // Consultar todas as pessoas como objetos simples (READ)
    const pessoas2 = await PessoaModel.find().lean();
    console.log("Encontrados:");
    console.log(pessoas2);

    // Consultar as pessoas menores ou iguais a 18 anos (READ)
    const numero = await PessoaModel.where('idade').lte(18).countDocuments().exec();
    console.log("Encontrados:");
    console.log(numero);

    // Modificar um documento e salvar (UPDATE)
    const documento = await PessoaModel.findById('6169c17e68d6a6b7eca7097f').exec();
    if (documento != null) {
      documento.idade = 30;
      documento.email = 'outro@gmail.com';
      const documentoAtualizado = await documento.save();
      console.log("Resultado da alteração:");
      console.log(documentoAtualizado);
    }

    // Deletar um documento e salvar (DELETE)
    const documentoRemocao = await PessoaModel.findById('6169c17e68d6a6b7eca7097f').exec(); 
    if (documentoRemocao != null) {
      const documentoRemovido = await documentoRemocao.remove();
      console.log("Resultado da remoção:");
      console.log(documentoRemovido);
    }

  } catch (err) {
    console.log("Falha ao conectar no MongoDB Atlas");
    console.log(err); 
  } finally {
    await disconnect();
    console.log("Desconectado do MongoDB Atlas");
  }
}

main();
