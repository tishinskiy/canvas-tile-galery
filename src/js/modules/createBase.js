import { config } from './config'
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

	let x = 0
	let y = 0

	for (let i = 0; i < images.length; i ++) {

		let j = Math.ceil((i * config.size ) / config.width) - 1

		if (j < 0) { j = 0 }

		if (typeof items[j] === 'undefined'){

			items.push([])
		}

		const item = cropFoto(images[i])

		items[j].push({
			item,
			img: images[i],
		})
	}

	for (let i = 0; i < items.length; i++) {

		for (let j = 0; j < items[i].length; j++) {

			ctx.drawImage(items[i][j].item, j * config.size, i * config.size, config.size, config.size );
		}
	}

	return {canvas, items}
}