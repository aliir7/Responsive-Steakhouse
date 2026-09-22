const $ = document;

/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = $.getElementById("nav-menu"),
  navToggle = $.getElementById("nav-toggle"),
  navClose = $.getElementById("nav-close");

/* Show menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = $.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = $.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  const header = $.getElementById("header");
  // Add the scroll-header class if the bottom scroll of the view
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
