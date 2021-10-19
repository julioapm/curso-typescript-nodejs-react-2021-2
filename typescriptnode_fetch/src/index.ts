import fetch from 'node-fetch';

async function main() {
    const uriBase = 'https://jsonplaceholder.typicode.com';
    try {
        //Realizar um GET
        const resposta = await fetch(`${uriBase}/posts`);
        if (resposta.ok) {
            const dadosjson = await resposta.json();
            console.log('Dados:');
            console.log(dadosjson);
        } else {
            console.log('GET status:', resposta.status);
            console.log('GET statusText:', resposta.statusText);
        }
    } catch (error) {
        console.log('Falha no acesso ao web service:');
        console.log(error);
    }
}

main();