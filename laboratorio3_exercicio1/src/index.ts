class Circulo {
    constructor(
        public x: number,
        public y: number,
        public raio: number
    ) { }
    area(): number {
        return Math.PI * this.raio * this.raio;
    }
    circunferencia():number {
        return 2 * Math.PI * this.raio;
    }
}

const circulo = new Circulo(10, 20, 5);
console.log(circulo.area());
console.log(circulo.circunferencia());


























/*class Circulo {
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
console.log(circulo.circunferencia());*/