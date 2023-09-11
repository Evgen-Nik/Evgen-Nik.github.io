// гамбургер

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});

// ползунок

var slider = document.getElementById("rating-slider");
var output = document.getElementById("rating-counter");
output.innerHTML = slider.value + ' %'; 


slider.oninput = function() {
    output.innerHTML = this.value + ' %';
}

