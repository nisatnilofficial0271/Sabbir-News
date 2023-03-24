const navToggle = document.querySelector(".nav-toggle");

const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {

  navToggle.classList.toggle("active");

  navMenu.classList.toggle("active");

});
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
