
// crear un algoritmo, que basado en la nota
// imprima si el alumno aprueba la materia.
// aprueba 60
//si el alumno saca una nota menor a 50 
// imprimir un mensaje que diga:
//por favor estudie más.

//let nota=   55;
let nota=prompt("nota del alumno");
if(nota>=60) {
    console.log('El alumno aprueba la clase');
} else if(nota<50) {
    console.log('por favor estudie más')   
} else{
        console.log('El alumno NO aprueba la clase');
}



