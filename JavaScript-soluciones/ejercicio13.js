// forma 1
// every con ciclo
function everyConCiclo(arr, pred) {
	for (let el of arr) {
		if (!pred(el)) return false
	}
	return true
}
// every con some
// buscar false con some y lo pasa a true
// explicación el some se detiene en el primer true teoricamente
const someEvery = (arr, pred) => !arr.some((v) => !pred(v))

// salida
const arr = [1, 2, 3, 4],
	arr2 = [2, 4, 6, 8],
	numeroPar = (num) => num % 2 === 0

console.log(cicloEvery(arr, numeroPar))
console.log(cicloEvery(arr2, numeroPar))

console.log(everyConCiclo(arr, numeroPar))
console.log(everyConCiclo(arr2, numeroPar))

// forma 2
// every con ciclo
/*
function cicloEvery(arr, pred) {
	let result = []
	for (let i in arr) {
		result.push(pred(arr[i]))
	}
	return result.indexOf(false) === -1 ? true : false
}
*/
