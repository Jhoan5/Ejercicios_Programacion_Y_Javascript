// forma l / complicando el código /
/*
function showString(arr){
	if(!Array.isArray(arr) && arr instanceof String){
		arr = arr.split('');
	}else{
		arr = `${arr}`;
	}
	 arr.split('').forEach((v,i)=>console.log(`Indice ${i}, Posición: ${i+1}, Valor: ${v}.`));
}
showString('hola mundo');
showString(1046);
*/
// forma 2

function showString(arr){
	for(let i in arr){
		console.log(`Indice ${i}, Posición: ${i+1}, Valor: ${arr[i]}.`);
	}
}
showString('hola nuevo amig@');
