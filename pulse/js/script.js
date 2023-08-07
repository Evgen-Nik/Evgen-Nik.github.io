$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide (item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modalw

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modalw__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

        //Close modalw

    $('.modalw__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

            //Для клавиши Esc отслеживаем нажатие этой кнопки.
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") { // К условию можно добавить что окно уже открыто, проверить style.display
            $('.overlay, #consultation, #order, #thanks').fadeOut('slow'); // Действие по закрытию окна
        }
    });

            //Для закрытия по подложке - отслеживаем клик по ней:
    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
        }
    });

    //Валидация форм

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите минимум {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    
    // Маска ввода номера

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    //

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn();


            $('form').trigger('reset');
        });
        return false;
    });

    // Smooth scroll and pageUp

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageUp').fadeIn();
        } else {
            $('.pageUp').fadeOut();
        } 
    });

    $("a[href=#up]").click(function() { //href^='#' - реакция на все ссыки начинающиеся на #
        const _href = $(this).attr('href');
        $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
        return false;
    });

    // подкючение библиотеки WOW

    new WOW().init();
});











// Слайдер tiny-slider

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
// });

// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });