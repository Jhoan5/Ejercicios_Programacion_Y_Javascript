// forma 1 / primera funcion /
/*
function filtroObj(obj,arr){
	let keys = Object.keys(obj);
	let encontrado = [];
	for(let i in keys){
		for(let j in arr)
		if(keys[i]===arr[j]){
			encontrado.push(keys[i]);
		}
	}
	return encontrado;
}
let obj = {a:1,b:2,c:3,d:4};
let arr = ['a','d','e'];
console.log(filtroObj(obj,arr));
*/
// / segunda funcion /
function filtroObj(obj,arr,include=true){
	let keys = Object.keys(obj);
	if(include==true){
		let encontrado = []	;
		for(let i in arr){
				if(keys.includes(arr[i])){
					if(!encontrado.includes(arr[i])){
						encontrado.push(arr[i]);
					}
				}
		}
		return encontrado;
	}else if(include==false){
		let noEncontrado = []	;
		for(let i in arr){
				if(!keys.includes(arr[i])){
					if(!noEncontrado.includes(arr[i])){
						noEncontrado.push(arr[i]);
					}
				}
		}
		return noEncontrado;

	}
}
let obj2 = {a:1,b:2,c:3,d:4};
let arr2 = ['a','d','e','f','x'];
console.log(filtroObj(obj2,arr2));
console.log(filtroObj(obj2,arr2,false));
