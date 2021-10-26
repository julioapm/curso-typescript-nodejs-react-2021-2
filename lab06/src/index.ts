import fetch from 'node-fetch';
import { listUser } from './interfaces'

async function main() {
    const uriBase = 'https://reqres.in';

    try {

        //GET sucess
        /*
        const resposta = await fetch(`${uriBase}/api/users`);
        
        if(resposta.ok) {
            const dados: listUser = await resposta.json();
            console.log(dados.data);
            console.log('Status:', resposta.status, resposta.statusText);
        } else {
            console.log('Problema no acesso:', resposta.status, resposta.statusText);
        }
        */

        //GET fail
        /*
        const resposta = await fecth(`${uriBase}/api/users/56`);
        
        if(resposta.ok) {
            const dados: listUser = await resposta.json();
            console.log(dados.data);
            console.log('Status:', resposta.status, resposta.statusText);
        } else {
            console.log('Problema no acesso:', resposta.status, resposta.statusText);
        }
        */

        //POST sucess
        /*
        const resposta = await fetch(`${uriBase}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: 'Carlos',
                job: 'Leader'
            }),
        });

        if(resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
            console.log('Status:', resposta.status, resposta.statusText);
        } else {
            console.log('Problema no acesso:', resposta.status, resposta.statusText);
        }
        */

        //POST fail
        /*
        const resposta = await fetch(`${uriBase}/apiii/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: 'Carlos',
                job: 'Leader'
            }),
        });

        if(resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
            console.log('Status:', resposta.status, resposta.statusText);
        } else {
            console.log('Problema no acesso:', resposta.status, resposta.statusText);
        }
        */

        //PUT sucess
        /*
        let resposta = await fetch(`${uriBase}/api/users/2`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "morpheus",
                job: "zion resident"
            }) 
        });

        if(resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
            console.log('Status:', resposta.status, resposta.statusText);
        } else {
            console.log('Problema no acesso:', resposta.status, resposta.statusText);
        }
        */

        //PUT fail
        /*
        let resposta = await fetch(`${uriBase}/apii/users/23`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "morpheus",
                job: "zion resident"
            }) 
        });

        if(resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
            console.log('Status:', resposta.status, resposta.statusText);
        } else {
            console.log('Problema no acesso:', resposta.status, resposta.statusText);
        }
        */

        //PATCH sucess
        /*
        let resposta = await fetch(`${uriBase}/api/users/2`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "morpheus",
            })
        });

        if (resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
            console.log('Status:', resposta.status, resposta.statusText);
        } else {
            console.log('Problema no acesso:', resposta.status, resposta.statusText);
        }
        */

         //PATCH fail
        /*
        let resposta = await fetch(`${uriBase}/apii/users/2`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: "morpheus",
            })
        });

        if (resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
            console.log('Status:', resposta.status, resposta.statusText);
        } else {
            console.log('Problema no acesso:', resposta.status, resposta.statusText);
        }
        */

        //DELETE sucess
        /*
        let resposta = await fetch(`${uriBase}/api/users/2`, {
            method: 'DELETE',
        });

        if (resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
            console.log('Status:', resposta.status, resposta.statusText);
        } else {
            console.log('Problema no acesso:', resposta.status, resposta.statusText);
        }
        */

    } catch (error) {
        console.log('Falha no acesso ao Web Service: ');
        console.log(error);
    }

}

main();