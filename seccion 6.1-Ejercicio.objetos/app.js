let persona1={
    nombre:'fernando',
    edad:32,
};

let persona2={
    nombre:'carlos',
    edad:35,
};

let persona3={
    nombre:'Valentin',
    edad:29,
};
let personas=[persona1,persona2,persona3];

for (let i=0;i<personas.length;i++){
   // let persona =personas[i];
    console.log(`${personas[i].nombre}--${personas[i].edad}`); 
}
    
