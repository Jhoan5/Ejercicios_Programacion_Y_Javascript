// forma 1 / buscador de 'F'/
function contarFs(string){
	let contar=0;
	for(let i in string){
			if(string[i]=='F'){
					contar+=1;
			}
	}
	return contar;
}
let string ='F en F hola F';
console.log(contarFs(string));
// forma 1 / bucadores /
/*
function contarAbc(string,abc){
	let contar=0;
	for(let i in string){
			if(string[i]==abc){
					contar+=1;
			}
	}
	return contar;
}
let string ='F en F hola F';
console.log(contarAbc(string,'e'));
*/
//buscadores forma 2
/*
let cadena="Bienvenidos al Nuevo Mundo fff";
function buscar(cadena,busqueda) {
	let contador=0;
	for(let i=0;i<cadena.length;i++){
			cadena[i]==busqueda ? contador+=1 : contador;
	}
	return contador;
}
console.log(`Se encontro ${buscar(cadena,'j')}`);
*/
