//forma 1 / recursion => funcion que se llama a si misma
// algo como un bucle for o while hecho con funciones/
function parImpar(n){
	if(n==0){
		return 'par';
	}else if(n==1){
		return 'impar';
	}
	n-=2
	return parImpar(n);
}
console.log(parImpar(0));
