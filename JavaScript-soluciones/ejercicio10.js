// forma 1
function compareObj(object1, object2) {
	const obj1 = Object.entries(object1)
	const obj2 = Object.entries(object2)

	if (obj1.length == obj2.length) {
		let stack = []
		for (let i in obj1) {
			for (let j in obj2) {
				if (obj1[i][0] === obj2[j][0] && obj1[i][1] === obj2[j][1]) {
					stack.push(true)
					break
				}
			}
		}
		return obj1.length == stack.length
	}
	return false
}
console.log(compareObj({ x: 1 }, { x: 1 }))
console.log(compareObj({ x: 1 }, { x: 1 }))
console.log(compareObj({ x: 1 }, { x: 1 }))
