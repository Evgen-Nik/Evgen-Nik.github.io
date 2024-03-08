window.addEventListener('DOMContentLoaded', () => {

    // navbar

    const navbarItem = document.querySelectorAll(".navbar__item");
    const toggleNavbarClass = function() {
        navbarItem.forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
    }
    Array.from(navbarItem).forEach(function(element) {
        element.addEventListener('click', toggleNavbarClass);
    });

    // бургер

    const navbar = document.querySelector('.navbar__list'),
          burger = document.querySelector('.header__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('header__burger_active');
        navbar.classList.toggle('navbar__list_active');
    });

    navbarItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('header__burger_active');
            navbar.classList.toggle('navbar__list_active');
        });
    });




    //select

    // Добавим обработчик события клика на документ, чтобы при клике вне списка, он закрывался
    document.addEventListener("click", function(e) {
		const selectContainers = document.querySelectorAll('.select');
		selectContainers.forEach(selectContainer => {
			const selectOptions = selectContainer.querySelector('.select__options');
			const selectStyled = selectContainer.querySelector('.select__styled');
			if (!selectContainer.contains(e.target)) {
			selectOptions.style.display = 'none';
			selectStyled.classList.remove('open');
			} else {
			if (e.target.classList.contains('select__styled')) {
				if (selectOptions.style.display === 'block') {
				selectOptions.style.display = 'none';
				selectStyled.classList.remove('open');
				} else {
				selectOptions.style.display = 'block';
				selectStyled.classList.add('open');
				}
			}
			}
		});
    });

    // Добавим обработчик события клика на опции списка
    document.querySelectorAll('.select__option').forEach(option => {
		option.addEventListener('click', function() {
			const selectContainer = this.closest('.select');
			const select = selectContainer.querySelector('select');
			select.value = this.getAttribute('data-value');
			const selectOptions = selectContainer.querySelector('.select__options');

			// Удаляем класс active из всех элементов списка
			selectOptions.querySelectorAll('.select__option').forEach(option => {
			option.classList.remove('active');
			});

			// Добавляем класс active к выбранному элементу
			this.classList.add('active');

			const selectStyled = selectContainer.querySelector('.select__styled');
			selectStyled.innerText = this.innerText;
			selectOptions.style.display = 'none';
			selectStyled.classList.remove('open');
		});
    });



    // ползунок

    const slider = document.getElementById("rating-slider");
    const output = document.getElementById("rating-counter");
    output.innerHTML = slider.value + ' %'; 


    slider.oninput = function() {
        output.innerHTML = this.value + ' %';
    }
});

