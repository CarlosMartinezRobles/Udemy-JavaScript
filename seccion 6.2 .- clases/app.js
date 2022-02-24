let carro1={
    marca:'Toyota',
    tipo:'Sedan',
    Puertas: 3,
};

class Carro {
    constructor( marca1, tipo1, puertas){
        this.marca=marca1;
        this.tipo=tipo1;
        this.puertas=puertas;
        this.creadoEn='hoy';

    }
}

let carro2 = new Carro('Mazda','Sedan', 2);

console.log(carro1);
console.log(carro2);