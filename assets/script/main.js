const navElement = document.querySelector(".nav__menu");
const closeBtn = document.querySelector(".close");
const toggleBtn = document.querySelector(".toggle__btn");
const navLinks = document.querySelectorAll(".nav__link");

const openMenu = () => {
  navElement.style.left = "0";
};

const closeMenu = (e) => {
  e.preventDefault;
  navElement.style.left = "-100%";
};

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
toggleBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
