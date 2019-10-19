import createImages from './modules/createImages'
import config from './modules/config'
import createBase from './modules/createBase'

const galery = document.getElementById('galery')

config.width = galery.offsetWidth,
config.height = galery.offsetHeight,
config.size = 200

const ready = () => {

	const { canvas, items } = createBase(galery)

	console.log(items);

	galery.append(canvas)

	// canvas.addEventListener('mousemove', (e) => {
	// 	console.log(e);
	// })
}

window.onload = function(){
	console.log('load');
	ready()
}

document.addEventListener("DOMContentLoaded", () => {

	const inWidth = Math.ceil(config.width/config.size)
	const inHeight = Math.ceil(config.height/config.size)

	createImages(inHeight * inWidth - 7, galery)
});
