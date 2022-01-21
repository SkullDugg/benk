const hamburger = document.querySelector('.hamburger');

const hamburgerClose = document.querySelector('.close');

const menu = document.querySelector('.overlay-container');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active')
    menu.classList.toggle('invis');
});

hamburgerClose.addEventListener('click', function() {
    menu.classList.toggle('invis');
});