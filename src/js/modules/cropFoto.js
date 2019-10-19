import config from './config'

export default (img) => {

	const foto = document.createElement('canvas')
	foto.width = config.size
	foto.height = config.size

	let x, y, w, h

	const width = img.width
	const height = img.height

	if (width > height) {

		w = width * config.size / height
		h = config.size

		x = 0
		y = (h - w) / 2

	} else {

		h = height * config.size / width
		w = config.size

		y = 0
		x = (w - h) / 2
	}

	const ctx = foto.getContext('2d')
	ctx.drawImage(img, y, x, w, h );

	return foto
}