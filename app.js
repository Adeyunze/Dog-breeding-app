const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".links");
// const links = document.querySelectorAll('.links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});