// hamburger
const hamburger = document.querySelector('#hamburger')
const navMEnu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('hamburger-active')
  navMEnu.classList.toggle('hidden')
});

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// klick diluar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMEnu) {
        hamburger.classList.remove('hamburger-active');
        navMEnu.classList.add('hidden');
    }
});

// dark mode 
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }