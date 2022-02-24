

class Carro {
    constructor( marca1, tipo1, puertas){
        this.marca=marca1;
        this.tipo=tipo1;
        this.puertas=puertas;
        this.creadoEn='hoy';
        this.encendido=false;
        this.gasolina=100;

    }
    encenderCarro(){
        if (this.encendido){
            console.error('el carro ya estába encendido');
        }else{
            this.encendido=true;
            console.log('el carro está encendido');
        }
        return this;
        }
    realizarViaje(consumo){
        if(!this.encendido)return console.log('carro apagado');
        if(consumo>this.gasolina)return console.log('No se puede realizar viaje'+this.gasolina);
        this.gasolina =this.gasolina-consumo;
        return 'le queda '+ this.gasolina;
    }

}

let carro= new Carro('mazda','Sedan', 2,'ayer')
 
console.log(carro);


