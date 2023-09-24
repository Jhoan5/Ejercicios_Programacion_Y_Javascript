//forma 1 / objeto Math halla el minimo internamente, no corresponde a solucion de lógica/
const min = (a,...b) => (Math.min(a,b));
console.log(min(2,4));
//forma 2 / forma adecuada o basica para logica /
/*
function min(a,b){
    if(a==b){
        return 'igual';
    }else if(a<b){
        return a;
    }else{
        return b;
    }
}
console.log(min(6,5));
*/
