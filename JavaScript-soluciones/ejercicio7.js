function rango(inicio,final){
	let arreglo = [];
	for(let i = inicio; i<=final;i++){
			arreglo.push(i);
	}
	return arreglo;
}
console.log(rango(1,10));
/* * */
function rangoValoresIntermediosIncrementados(inicio,final,incremento){
	incremento = parseInt(incremento);
	let arreglo = [];
	for(let i = inicio; i<=final;i+=incremento){
			arreglo.push(i);
	}
	return arreglo;
}
console.log(rangoValoresIntermediosIncrementados(1,10,3));
/* * */
//suma 1
/*
function suma(array){
	let suma=0;
	for(let valores of array){
			suma += valores;
	}
	return suma;
}
let arreglo = [1,2,4,5];
console.log(suma(arreglo));
*/
//suma 2
const suma = arr => (arr.reduce((a,v)=>(a+=v),0));
console.log(suma([1,2,3,4,5]));
