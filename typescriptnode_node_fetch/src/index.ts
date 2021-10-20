import fetch from 'node-fetch';
import {PostDTO} from './dtos'

async function main() {

    const uriBase = 'https://jsonplaceholder.typicode.com';
    try {
        //let id = 1;
        //const resposta = await fetch(`${uriBase}/posts/${id}`);
     /*   if (resposta.ok) {
           // const dadostexto = await resposta.text();
            const dadosjson: PostDTO = await resposta.json();
            console.log('Dados: ');
            console.log(dadosjson.title);
            //console.log(dadosjson.length);
            
        } else {
            console.log('GET status: ', resposta.status);
            console.log('GET statusText: ', resposta.statusText);
        }*/
        //Realizar um POST
        /*let post: PostDTO = {
            id: 1,
            userId: 1,
            title: "Bechamel",
            body: "Tutorial no Youtube de Paola Carosella"
        };
        const resposta = await fetch(`${uriBase}/posts/${post.id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(post)
        });
         if (resposta.ok) {
            const dadosjson: PostDTO = await resposta.json();
            console.log('Dados: ');
            console.log(dadosjson);
            
        } else {
            console.log('PUT status: ', resposta.status);
            console.log('PUT statusText: ', resposta.statusText);
        }*/
        //Realizar um DELETE para
        let id = 1;
        const resposta = await fetch(`${uriBase}/posts/${id}`, {
            method: 'DELETE'
        });
         if (resposta.ok) {
            console.log('DELETE realizado com sucesso.')

            
        } else {
            console.log('DELETE status: ', resposta.status);
            console.log('DELETE statusText: ', resposta.statusText);
        }
        
    } catch (error) {
        console.log('Falha no acesso ao web service: ')
        console.log(error);
    }


}

main();