// forma 1
/*
const arr = ["agucateenensalada", "antropologia", "fiestasdecembrinas", "arrozconverdurasdelmercado"];
let obj = {a:0,e:0,i:0,o:0,u:0};
for(let i in arr){
    let arr2 = arr[i];
    for(let a in arr2){
        if(arr2[a] == "a" || arr2[a] =="A"){
            obj.a+=1;
            continue
        }
        if(arr2[a] == "e" || arr2[a] =="E"){
            obj.e+=1;
            continue
        }
        if(arr2[a] == "i" || arr2[a] =="I"){
            obj.i+=1;
            continue
        }
        if(arr2[a] == "o" || arr2[a] =="O"){
            obj.o+=1;
            continue
        }
        if(arr2[a] == "u" || arr2[a] =="U"){
            obj.u+=1;
        }
    }
    console.log(`En la palabra ${arr[i]} se encontro las siguientes vocales, las veces indicadas; a: ${obj.a}, e: ${obj.e}, i: ${obj.i}, o: ${obj.o}, u: ${obj.u}`);
    obj = {a:0,e:0,i:0,o:0,u:0};
}
*/
// forma 2 / usando funciones /

function count(arr){
    arr.forEach((v)=>{
        console.log('Se encontro en la palabra '+v+'la cantidad de veces por cada vocal');
        console.log('a: '+v.split('').filter(v=>(v=="a"||v=="A")).length);
        console.log('e: '+v.split('').filter(v=>(v=="e"||v=="E")).length);
        console.log('i: '+v.split('').filter(v=>(v=="i")||v=="I").length);
        console.log('o: '+v.split('').filter(v=>(v=="o")||v=="O").length);
        console.log('u: '+v.split('').filter(v=>(v=="u"||v=="U")).length);
    });
}
const arr = ["agucateenensalada", "antropologia", "fiestasdecembrinas", "arrozconverdurasdelmercado"];
count(arr);
