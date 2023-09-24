//forma 1
let valores =[];
for(let i=1;i<=100;i++){
    if(i%3==0){
        if(i%5==0){
            valores[i-1]='fizz fizzbuzz';
        }else{
        valores[i-1]='fizz';
        }
    }else if(i%5==0){
        valores[i-1]='buzz';
    }else{
        valores[i-1]=i;
    }
}
console.log(valores);
