// forma 1
/*
function indicesPares(arr){
	let arrPar = [];
	for(let i=0;i<arr.length;i+=2){
		arrPar.push(arr[i]);
	}
	return arrPar;
}

let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = ['a','b','c','d','e','f'];
console.log(indicesPares(arr))
console.log(indicesPares(arr2))
*/
// forma 2
const indicePar = arr => (arr.filter((v,i)=>i%2==0));

let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = ['a','b','c','d','e','f'];

console.log(indicePar(arr))
console.log(indicePar(arr2))
