// Cree un algoritmo que permita determinar
// la calificación en letras de un alumno
//si nota 100 a 90 = A
//si nota 80 a 89 = B
//si nota 70 a 79 = C
//si nota 60 a 69 = D
//si nota 60 = F

let nota= 40;
let notaLetra='';
if (nota>=90){
    notaLetra='A';
}else if(nota>=80){
    notaLetra='B';
}else if(nota>=70){
    notaLetra='C';
}else if(nota>=61){
    notaLetra='D';
}else {
    notaLetra='F';
}
console.log(nota+' es igual a '+ notaLetra);
