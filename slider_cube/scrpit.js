const container = document.querySelector(".container")
const cube = document.querySelector(".cube")
rotateX = 0
rotateY = 0

container.addEventListener("click", (event) => {
	tagTarget = event.target
	// console.log(tagTarget);
	if (tagTarget.classList.contains("container__arrow--right")) {
		rotateY += 90
		cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
	} else if (tagTarget.classList.contains("container__arrow--left")) {
		rotateY -= 90
		cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
	} else if (tagTarget.classList.contains("container__arrow--top")) {
		rotateX += 90
		cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
	} else if (tagTarget.classList.contains("container__arrow--bottom")) {
		rotateX -= 90
		cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
	} else if (tagTarget.classList.contains("container__button")) {
		const random = Math.ceil(Math.random() * 6)
		const random2 = Math.ceil(Math.random() * 6)
		if (rotateX < 500) {
			rotateX += 90 * random
		} else {
			rotateX -= 90 * random
		}
		if (rotateY < 500) {
			rotateY += 90 * random2
		} else {
			rotateY -= 90 * random
		}
		cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
	}
})