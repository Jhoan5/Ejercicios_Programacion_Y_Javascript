// forma 1
function reverse(arr){
	let newArr = [];
	for(let i=arr.length;i>0;i--){
		newArr.push(arr[i-1]);
	}
	if(!Array.isArray(arr)){
		return newArr.join('');
	}
	return newArr;
}
console.log(reverse(['uno','dos','tres']));
console.log(reverse('hola'));
