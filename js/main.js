const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const search = document.querySelector('.header__form');
const searchInput = document.querySelector('.header__search');
const searchOpener = document.querySelector('.header__search-label');
const searchCLoser = document.querySelector('.header__form-close');
const closer = document.querySelector('.header__menu-closer');
const body = document.querySelector('body');
const dropBtn = document.querySelector('.category__title');

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
searchInput.addEventListener('focus', function () {
    searchOpener.classList.add('focus');
});
searchInput.addEventListener('blur', function () {
    searchOpener.classList.remove('focus');
});
closer.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});
searchOpener.addEventListener('click', function () {
    searchOpener.classList.add('active');
    search.classList.add('active');
});
searchCLoser.addEventListener('click', function () {
    searchOpener.classList.remove('active');
    search.classList.remove('active');
});
document.addEventListener('click', function (e) {
    if (!isMobile()) {
        const target = e.target;
        const its_search = target == search || search.contains(target);
        const search_is_active = search.classList.contains('active');

        if (!its_search && search_is_active) {
            searchOpener.classList.remove('active');
            search.classList.remove('active');
        }
    }
});
if (!isMobile()) {
    scrollHeader();
}

if (dropBtn) {
    dropBtn.addEventListener('click', function () {
        slideToggle();
    });
}


function isMobile() {
    return window.innerWidth <= 1440 ? true : false;
}

function scrollHeader() {
    document.addEventListener('scroll', function () {
        if (!isMobile()) {
            if (scrollY > 90)
                document.querySelector('.header__inner').classList.remove('header__inner--large');
            else {
                document.querySelector('.header__inner').classList.add('header__inner--large');
            }
        } else {
            if (!document.querySelector('.header__inner').classList.contains('header__inner--large'))
                document.querySelector('.header__inner').classList.add('header__inner--large');
        }

    });
}
let slideOpen = true;
let initHeight;
if (document.querySelector('.category__dropdown-content')) {
    initHeight = document.querySelector('.category__dropdown-content').offsetHeight;
    document.querySelector('.category__dropdown').style.height = initHeight + 'px';
}
let intval = null;

function slideToggle() {
    window.clearInterval(intval);
    let mdiv = document.querySelector('.category__dropdown');

    if (slideOpen) {
        slideOpen = false;
        mdiv.style.height = '0px';
        document.querySelector('.category__top').classList.toggle('active');
    } else {
        slideOpen = true;
        mdiv.style.height = initHeight + 'px';
        document.querySelector('.category__top').classList.toggle('active');
    }
}

var mySwiper = new Swiper('.popular__slider', {
    containerModifierClass: '.popular__slider',
    speed: 400,

    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,

    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        700: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        770: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1150: {
            slidesPerView: 4,      
        },
        1300: {
            spaceBetween: 50,
            slidesPerView: 4,
        },

        1441: {
            spaceBetween: 60,
            slidesPerView: 4,
        },

    },


    
});