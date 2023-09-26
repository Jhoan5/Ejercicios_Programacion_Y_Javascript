// (1) número par o impar
	// devolvindo true para par y false para impar /
const parImpar = n =>(n%2==0);
// salidas de pruba de función
/*
console.log(parImpar(0));
console.log(parImpar(1));
console.log(parImpar(2));
console.log(parImpar(3));
*/
// (2) valores pares impares de array
	// retornando valores pares impares, reutilzando funcion parImpar /
function parImparArray(arr){
	let pares = [];
	let impares = [];
	for(let i in arr){
		parImpar(arr[i]) ? pares.push(arr[i]):impares.push(arr[i]);
	}
	return 'pares: '.concat(pares).concat(' impares: ').concat(impares);
}
// probando salida de funcion
//console.log(parImparArray([1,2,3,4,5,6,7,8,9,0]));

// (3) Divisores de un número
	// similar a parImpar /
	// Tener en cuenta que solo dos divisores indica numero primo /
function divisores(n){
	let divisores = [];
	for(let i=1;i<=n;i++){
		if(n%i==0){
			divisores.push(i);
		}
	}
	return divisores;
}
// probando salida de funcion
//console.log(divisores(4));
//console.log(divisores(78));
//console.log(divisores(23));

// (4) Impresion de tabla de multiplicar
	// meustra tabla hasta el 12 si no se especifica hasta que numero /
function tabla(num,limit=12){
	for(let i=1;i<=limit;i++){
		console.log(`${num} x ${i} = ${num*i}`)
	}
}
// probando salida de funcion
//tabla(4);
//tabla(6,6);
//tabla(9);
//tabla(12,5);

// (4) calculadora
class calculadora{
	static sumar(a,b){
		return a+b;
	}
	static restar(a,b){
		return a-b;
	}
	static dividir(a,b){
		return a/b;
	}
	static multiplicar(a,b){
		return a*b;
	}
}
// probando salidas de funcion o clase
//console.log(calculadora.sumar(4,56));
//console.log(calculadora.restar(12,5));
//console.log(calculadora.multiplicar(6,7));
//console.log(calculadora.dividir(100,25));
