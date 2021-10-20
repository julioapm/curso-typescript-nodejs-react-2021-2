import fetch from 'node-fetch';

async function main() {

    const uriBase = 'https://jsonplaceholder.typicode.com';
    try {
        const resposta = await fetch(`${uriBase}/posts`);
        if (resposta.ok) {
           // const dadostexto = await resposta.text();
            const dadosjson = await resposta.json();
            console.log('Dados: ');
            console.log(dadosjson);
            //console.log(dadosjson.length);
            
        } else {
            console.log('GET status: ', resposta.status);
            console.log('GET statusText: ', resposta.statusText);
        }
        
    } catch (error) {
        console.log('Falha no acesso ao wen service: ')
        console.log(error);
    }

}

main();