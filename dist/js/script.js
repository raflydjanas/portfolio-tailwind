const hamburger = document.querySelector('#hamburger')
const navMEnu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('hamburger-active')
  navMEnu.classList.toggle('hidden')
});

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};