class Circulo {
    constructor(
        public raio: number,
        public pontox: number,
        public pontoy: number
    ) {}
    area(): number {
        return Math.PI * this.raio * this.raio;
    }
    circunferencia(): number {
        return 2 * Math.PI * this.raio;
    }
}

const circulo = new Circulo(5, 10, 20);
console.log(circulo.area());
console.log(circulo.circunferencia());

//FABIO JR
class Circulo{
    private x: number;
    private y: number;
    private raio: number;

    constructor(x:number,y:number,raio:number){
        this.x=x;
        this.y=y;
        this.raio=raio;
    }

    get getX(){ return this.x; }
    get getY(){ return this.y; }
    get getraio(){ return this.raio; }
    set setX(x: number){ this.x = x; }
    set setY(y: number){ this.y = y; }
    set setraio(raio: number){ this.raio = raio; }
    
    areaCirculo(): number {
        return Math.PI* Math.pow(this.raio,2) ;
    }
   
    comprimentoCirculo(): number {
        return 2 * Math.PI * this.raio;
    }
}

let C1:Circulo= new Circulo(2,3,5);
console.log(C1.areaCirculo());
console.log(C1.comprimentoCirculo());
//FIM