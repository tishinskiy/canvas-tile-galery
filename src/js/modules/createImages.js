function randomInt(min, max) {

	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

const min = 200
const max = 500

export default ( count, block ) => {
	for(let i = 0; i < count; i++) {

		const IMG = new Image()
		IMG.src = `http://placeimg.com/${randomInt(min, max)}/${randomInt(min, max)}/any?name_${i}`
			block.append(IMG)
	}
}