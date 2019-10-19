import config from './config'
import cropFoto from './cropFoto'

export default (galery) => {

	const canvas = document.createElement('canvas')

	galery.style.cssText = `position: relative; font-size: 0`

	canvas.width = config.width,
	canvas.height = config.height
	canvas.id = 'galery-canvas'
	canvas.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: 100%`

	const ctx = canvas.getContext('2d')

	const childs = galery.children

	const images = []

	for( let i = 0; i < childs.length; i++) {
			
		if (childs[i].id !== 'galery-canvas') {
			childs[i].style.display = "none"
		}

		if(childs[i].tagName === 'IMG') {

			images.push(childs[i])

		}
	}

	const items = []

	let k = 0


	const inHeight = Math.ceil(config.height/config.size)
	const inWidth = Math.ceil(config.width/config.size)

	for (let i = 0; i < inHeight; i++) {

		items.push([])

		for (let j = 0; j < inWidth; j++) {


			if (typeof images[k] === 'undefined') {

				k = 0
			}

			const item = cropFoto(images[k++])

			items[i].push({
				item,
				img: images[i],
			})
		}
	}

	for (let i = 0; i < images.length; i ++) {

		if ((i) % inWidth === 0 || i === 0) {
		}


	}

	for (let i = 0; i < items.length; i++) {

		for (let j = 0; j < items[i].length; j++) {

			ctx.drawImage(items[i][j].item, j * config.size, i * config.size, config.size, config.size );
		}
	}

	return {canvas, items}
}