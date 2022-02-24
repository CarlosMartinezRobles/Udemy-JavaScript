function max(a,b,c){
    let mayor;
    if (a>b){
        if(a>c){
            mayor=a;
        }else {
            mayor=c;
        }
    }else if(b>c){
        mayor=b;

    }else {
        mayor=c;
    
        }
    return mayor;
    }

 let mayor = max (6,7,5)



console.log(mayor);//6