window.addEventListener('DOMContentLoaded', () => {
    /**
     * Header menu scroll styles
     */
    const headerMenu = document.querySelector('.header');
    window.addEventListener("scroll", function() {
        window.scrollY >= 70 ? headerMenu.classList.add("white") : headerMenu.classList.remove("white");
    });

    /**
     * Test Section
     */

    const testMenuItem = document.getElementsByClassName("test__menu-item");
         
    const toggleTestClass = function() {
        document.querySelectorAll('.test__menu-item').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        if(!this.classList.contains("active")) {
            this.classList.add("active")
            document.querySelectorAll('.test__window .content').forEach((item, i) => {
                item.classList.remove("active");
            });
            document.getElementById(this.getAttribute('data-test-window')).classList.add("active");
        }
    }
    Array.from(testMenuItem).forEach(function(element) {
        element.addEventListener('click', toggleTestClass);
    });

    
    // const testMenuItem = document.querySelectorAll('.test__menu-item'),
    //       testMenuTitle = document.querySelectorAll('.test__menu-title'),
    //       testMenuDescr = document.querySelectorAll('.test__menu-descr'),
    //       testContent = document.querySelectorAll('.test__content'),
    //       testMenu = document.querySelector('.test__menu');
          

    // function hideTestContent() {
    //     testMenuItem.forEach(item => {
    //         item.classList.remove('test__menu-item_active');
    //     });
    //     testMenuTitle.forEach(item => {
    //         item.classList.remove('test__menu-title_active');
    //     });
    //     testMenuDescr.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     });
    //     testContent.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     });
    // }

    // function showTestContent(i = 0) {
    //     testMenuItem[i].classList.add('test__menu-item_active');
    //     testMenuTitle[i].classList.add('test__menu-title_active');
    //     testMenuDescr[i].classList.add('show', 'fade');
    //     testMenuDescr[i].classList.remove('hide');
    //     testContent[i].classList.add('show', 'fade');
    //     testContent[i].classList.remove('hide');
    // }

    // hideTestContent();
    // showTestContent();

    // testMenu.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('test__menu-title')) {
    //         testMenuTitle.forEach((item, i) => {
    //             if (target === item) {
    //                 hideTestContent();
    //                 showTestContent(i);
    //             }
    //         });
    //     }
    // });


    /**
     * Plans Section
     */

    const plansVar = document.getElementsByClassName("plans__var");
    const togglePlanClass = function() {
        document.querySelectorAll('.plans__var').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        if(!this.classList.contains("active")) {
            this.classList.add("active")
        }
    }
    Array.from(plansVar).forEach(function(element) {
        element.addEventListener('click', togglePlanClass);
    });

    // const plansVar = document.querySelectorAll('.plans__var'),
    //       plansVariants = document.querySelector('.plans__variants');
          

    // function hidePlansContent() {
    //     plansVar.forEach(item => {
    //         item.classList.remove('plans__var_active');
    //     });
    // }

    // function showPlansContent(i = 1) {
    //     plansVar[i].classList.add('plans__var_active');
    // }

    // hidePlansContent();
    // showPlansContent();

    // plansVariants.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('plans__var')) {
    //         plansVar.forEach((item, i) => {
    //             if (target === item) {
    //                 hidePlansContent();
    //                 showPlansContent(i);
    //             }
    //         });
    //     }
    // });



    /**
     * FAQ
     */
    const faqQuestions = document.getElementsByClassName("faq-questions__item");
    const toggleFaqClass = function() {
        document.querySelectorAll('.faq-questions__item').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
    }
    Array.from(faqQuestions).forEach(function(element) {
        element.addEventListener('click', toggleFaqClass);
    });

    /**
     * Animated Checkboxes
     */
    const getDistanceToViewportTop = function(element) {
        const elementRect = element.getBoundingClientRect();
        return elementRect.top;
    }
    const animatedCheckboxes = document.getElementsByClassName("align__scrollwindow-item");
    const toggleCheckboxClass = function() {
        Array.from(animatedCheckboxes).forEach(function(element) {
            if (getDistanceToViewportTop(element) < 250) {
                if (!element.classList.contains('active')) element.classList.add('active')
            } else if (element.classList.contains('active')) {
                if (element.classList.contains('active')) element.classList.remove('active')
            }
        });
    }
    window.addEventListener('scroll', toggleCheckboxClass);

    /**
     * humburger
     */
    const menu = document.querySelector('.header__wrapper'),
          link = document.querySelectorAll('.header__link'),
          hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__wrapper_active');
        registration.classList.toggle('header__registration_active');
    });

    link.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__wrapper_active');
            registration.classList.toggle('header__registration_active');
        });
    });

    /**
     * Footer
     */
    const footerMenuItem = document.getElementsByClassName("footer__menu-item");
    const toggleFooterClass = function() {
        document.querySelectorAll('.footer__menu-item').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
    }
    Array.from(footerMenuItem).forEach(function(element) {
        element.addEventListener('click', toggleFooterClass);
    });
});