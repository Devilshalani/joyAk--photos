// White Devil @ Devilshalani javascript ES6
const spliteLeft = document.getElementById('spliteLeft');
const spliteRight = document.getElementById('spliteRight');
const heart = document.querySelector('.heart');
const banner = document.querySelector('.banner');
const text = document.querySelector('.text');

const scrollToSplite = e => {
	let scrollY = window.scrollY;
	heart.style.backgroundSize = 100 + scrollY * 2.2 + 'px';
	if (scrollY > innerHeight) {
		heart.style.opacity = '0';
		spliteLeft.style.left = (-1) * scrollY + innerHeight + 'px';
		spliteRight.style.left = (+1) * scrollY - innerHeight + 'px';
	} else {
		spliteLeft.style.left = 0 + 'px';
		spliteRight.style.left = 0 + 'px';
		heart.style.opacity = '1';
	}
	if (scrollY > (innerHeight * 1.5)) {
		banner.style.display = 'none'; 
	} else {
		banner.style.display = 'block'; 
	}
}

window.addEventListener("scroll", scrollToSplite);