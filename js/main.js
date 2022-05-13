var elButton = document.querySelector('.header__button');
var elMenu = document.querySelector('.header__menu');

elButton.addEventListener('click', function () {
	elMenu.classList.toggle('header__menu--open');
});



var elMenuBtn = document.querySelector('.menu__btn');
var elMenuTwo = document.querySelector('.header__menu');

elMenuBtn.addEventListener('click', function () {
	elMenuTwo.classList.toggle('header__menu--open');
});

var body = document.querySelector('body')

body.addEventListener("click", function() {
	body.classList.toggle('overflow')
})