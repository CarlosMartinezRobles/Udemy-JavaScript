let numeros=[1,6,8,4,2,7,10,3,5];
let mayor=-99999;

for (let i = 0; i <=numeros.length; i++) {
    if (numeros[i]>=mayor){
        mayor[i]=numeros[i];
    }
    
}


console.log( 'el númnero mayor es: ' + mayor);