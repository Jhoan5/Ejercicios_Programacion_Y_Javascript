// forma 1 / for in y for of recorren array /
/*
function valoresObjeto(obj){
	let valores = [];
	for(let i of Object.values(obj)){
		valores.push(i);
	}
	return valores;
}
let obj = {a:2,b:5,name:'jh'};
console.log(valoresObjeto(obj));
*/
// forma 2
const valoresObjeto = obj => (Object.values(obj));
let obj = {a:2,b:5,name:'jh'};
console.log(valoresObjeto(obj));
