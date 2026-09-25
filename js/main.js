const $ = document;

/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = $.getElementById("nav-menu");
const navToggle = $.getElementById("nav-toggle");
const navClose = $.getElementById("nav-close");

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
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  const header = $.getElementById("header");

  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = $.getElementById("scroll-up");

  if (window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = $.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id;
    const top = section.offsetTop - 50;
    const height = section.offsetHeight;
    const link = $.querySelector(`.nav__menu a[href*="${id}"]`);

    if (!link) return;

    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height,
    );
  });
};

window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
