// forma 1 / for in y for of recorren array /

function valoresObjeto(obj){
	let valores = '';
	for(let i of Object.values(obj)){
		valores+=i;
	}
	return valores;
}
console.log(valoresObjeto({a:2,b:5,name:'jh'}));
console.log(valoresObjeto({a:'ho',b:'la'}));
