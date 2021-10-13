import { Cofrinho, Moeda } from './entidades';
import { salvarCofre } from './persistencia';

const cofre = new Cofrinho();
cofre.adicionar(new Moeda(1,'Um Real'));
cofre.adicionar(new Moeda(1,'Um Real'));
console.log(cofre.calcularTotal());
try {
    salvarCofre(cofre, 'cofre.json');
    //executar código aqui que depende do arquivo em disco, dará erro.
} catch (error) {
    console.log('Falha de escrita no arquivo:');
    console.log(error);
}