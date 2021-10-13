import { Cofrinho, Moeda } from './entidades';
import { salvarCofre, lerCofre , lerCofreAsync} from './persistencia';

/*
const cofre = new Cofrinho();
cofre.adicionar(new Moeda(1,'Um Real'));
cofre.adicionar(new Moeda(1,'Um Real'));
cofre.adicionar(new Moeda(0.5,'50 Centavos'));
console.log(cofre.calcularTotal());
salvarCofre(cofre, 'cofre.json', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Cofre salvo com sucesso!');
    }
});
*/
/*
lerCofre('cofre.json', (err, cofre) => {
    if (err) {
        console.log('Falha de leitura');
        console.log(err);
    } else {
        console.log('Leitura com sucesso');
        if (cofre != null) {
            console.log(cofre.calcularTotal());
        }
    }
});
*/
let ampulheta = true;
try {
    let cofre = await lerCofreAsync('cofre.json');
    ampulheta = false;
    console.log('Leitura com sucesso');
    if (cofre != null) {
        console.log(cofre.calcularTotal());
    }
} catch(err) {
    console.log('Falha de leitura');
    console.log(err);
}