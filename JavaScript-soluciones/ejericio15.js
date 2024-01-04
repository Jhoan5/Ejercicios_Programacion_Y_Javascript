class vector {
	constructor(x, y) {
		;(this.x = x), (this.y = y)
	}
	mas(vect) {
		let x = this.vector.x + vect.x
		let y = this.vector.y + vect.y
		return new vector(x,y)
	}
	menos(vect) {
		let x = this.vector.x - vect.x
		let y = this.vector.y - vect.y
		return new vector(x,y)

	}
	get longitud() {
		// longitud de origen a x y y
		this.x
		this.y
	}
}

const vect1 = new vector(2,5)
const vect2 = new vector(5,6)

console.log(/**algo */);