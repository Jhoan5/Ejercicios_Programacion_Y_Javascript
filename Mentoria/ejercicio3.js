// forma 1
function mixIndices(arr){
	let contain = new String;
	for(let i in arr){
		contain = contain+arr[i]+i;
	}
	return contain;
}
console.log(mixIndices('Aprende programacion'));
console.log(mixIndices('hoy'));
