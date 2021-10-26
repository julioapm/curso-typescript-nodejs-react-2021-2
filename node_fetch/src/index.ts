import fetch from 'node-fetch';

interface Teste{
    userId: number,
    id?: number,
    title: string,
    body: string,
}
 
async function main() {
    const uriBase = 'https://jsonplaceholder.typicode.com';
    try {
        let id = 1;
        // Realizar um GET
        /*
        const resposta = await fetch(`${uriBase}/posts/${id}`);
        if (resposta.ok) {
            const dadostext: Teste = await resposta.json();
            console.log('Dados:');
            console.log(dadostext);
        } else {
            console.log('GET status:', resposta.status);
            console.log('GET statusText:', resposta.statusText);
        }
        */

        // Realizar um POST
        /*
        let post: Teste = {
            userId: 1,
            title: 'Título',
            body: 'Corpo'
        }

        const resposta = await fetch(`${uriBase}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });

        if (resposta.ok) {
            const dadostext: Teste = await resposta.json();
            console.log('Dados:');
            console.log(dadostext);
        } else {
            console.log('POST status:', resposta.status);
            console.log('POST statusText:', resposta.statusText);
        }
        */

        // Realizar um PUT
        /*
        let post: Teste = {
            id: 1,
            userId: 1,
            title: 'Título',
            body: 'Corpo da mensagem'
        }

        const resposta = await fetch(`${uriBase}/posts/${post.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });

        if (resposta.ok) {
            const dadostext: Teste = await resposta.json();
            console.log('Dados:');
            console.log(dadostext);
        } else {
            console.log('POST status:', resposta.status);
            console.log('POST statusText:', resposta.statusText);
        }
        */

        // DELETE
        /*
        const resposta = await fetch(`${uriBase}/posts/${id}`, {
            method: 'DELETE',
        });

        if (resposta.ok) {
            const dadostext: Teste = await resposta.json();
            console.log('Dados:');
            console.log(dadostext);
            console.log(resposta.status, resposta.statusText);
        } else {
            console.log('POST status:', resposta.status);
            console.log('POST statusText:', resposta.statusText);
        }
        */

    } catch (error) {
        console.log('Falha no acesso ao web service');
        console.log(error);
    }
}

main();