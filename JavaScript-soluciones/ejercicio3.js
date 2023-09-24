//forma 1
let ancho=8;
let fila="";
for(let y=0;y<ancho;y++){
    for(let x=0;x<ancho;x++){
        if((x+y)%2==0){
            fila +=" ";
        }else{
            fila +="#";
        }
    }
    fila +="\n";
}
console.log(fila);
