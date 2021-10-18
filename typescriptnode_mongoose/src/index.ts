import { connect, disconnect } from 'mongoose';
import { PessoaModel } from './pessoa'

const uri = 'mongodb+srv://laranjinha:oRange@cluster0.ooj0o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function main(){
    try {
        await connect(uri);
        console.log('Conectado ao MongoDB Atlas')
        //inserindo uma pessoa
       /* const documentoInserido = await PessoaModel.create({
            nome: 'Daniel Soares',
            idade: 20,
            email: 'danie@gmail.com'
        });
        console.log('Inserido: ');
        console.log(documentoInserido);*/
       /* const pessoas = await PessoaModel.find().exec();
        console.log(pessoas);
        const pessoas2 = await PessoaModel.find().lean();
        console.log(pessoas2);
        const numero = await PessoaModel.where('idade').lte(18).countDocuments().exec();
        console.log(numero);*/

        //Modificar um documento em mémoria e salvar no banco
        /*const documento = await PessoaModel.findById('616d3494958f00625a8f875e').exec();
        if(documento != null){
            documento.idade = -30;
            documento.email = 'fulano@gmail.com';
            const docuemntoAtualizado = await documento.save();
            console.log(docuemntoAtualizado);
        }*/

        // Remover um fovumento em memória e salvar no banco
        /*const documento = await PessoaModel.findById('616d3494958f00625a8f875e').exec();
        if(documento != null){
            const documentoRemovido = await documento.remove();
            console.log(documentoRemovido);

        }*/

        

    } catch (error) {
        console.log('Falha acesso ao BD:')
        console.log(error);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDB Atlas')
    }
}

main();