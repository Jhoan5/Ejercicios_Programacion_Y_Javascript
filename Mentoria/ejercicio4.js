// forma 1
function unir(arr){
	let union = ''
	for(let i in arr){
		union+=arr[i];
	}
	return union;
}
console.log(unir(['1','3','5']));
console.log(unir(['l','o','v','e']));
