// forma 1
function tiposEnArray(arr){
	let tipos = [];
	for(let i in arr){
		tipos.push(typeof arr[i]);
	}
	return tipos;
}
let arr = [12,function (){},'m',{a:3},true,null,NaN,Infinity]
console.log(tiposEnArray(arr))
