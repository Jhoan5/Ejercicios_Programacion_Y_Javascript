//forma 1 // array que no contenga objetos
/*
function unArray(arr) {
	let array = []
	for (let i in arr) {
		Array.isArray(arr[i])
			? (array = array.concat(unArray(arr[i])))
			: array.push(arr[i])
	}
	return array
}
*/
/*
const miArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9]]
const resultado = unArray(miArray)
console.log(resultado)
*/
// forma 2

function unArray(arr) {
	return arr.reduce((result, v) => {
		if (Array.isArray(v)) return result.concat(unArray(v))
		else return result.concat(v)
	}, [])
}

// Ejemplo de uso:
const miArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9]]
const resultado = unArray(miArray)
console.log(resultado)
//forma 3 // sin recursion
