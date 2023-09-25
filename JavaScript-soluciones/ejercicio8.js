// forma 1
/*
function reversa(string){
	let string2='';
	let size=string.length;
	console.log(size);
	for(let i=0;i<size;i++){
			string2+=(string[size-(i+1)]);
	}
	string='';
	string=string2;
	console.log(string);
	return string;
}
let cadena = 'hola mundo querido';
let cadena2 = ['2','3','4',5];
console.log(reversa(cadena));
cadena=reversa(cadena);
console.log(cadena);
*/
// forma 2
function reversa(arr){
	let arr2 = [];
	if(Array.isArray(arr)){
		for(let i in arr){
			arr2.push(arr[arr.length-1-i]);
		}
	}else{
		for(let i in arr){
			arr2+=(arr[arr.length-1-i]);
		}
	}
	return arr = arr2;
}
let cadena = 'hola mundo querido';
let cadena2 = ['2','3','4',5];
console.log(reversa(cadena));
console.log(reversa(cadena2));
