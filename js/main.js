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
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1500,
  delay: 300,
  easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
});

/* Home */
sr.reveal(".home__title", { origin: "top" });
sr.reveal(".home__button", { delay: 600, origin: "top" });
sr.reveal(".home__fryingpan", { delay: 600, rotate: { z: 60 } });
sr.reveal(".home__rosemary-1", {
  delay: 1200,
  origin: "right",
  rotate: { z: -60 },
});
sr.reveal(".home__rosemary-2", {
  delay: 1200,
  origin: "left",
  rotate: { z: -60 },
});
sr.reveal(".home__tomato", {
  delay: 1200,
  origin: "right",
  rotate: { z: -60 },
});
sr.reveal(".home__spoon", { delay: 1200, origin: "bottom" });
sr.reveal(".home__pepper", { delay: 1200, origin: "top", distance: "120px" });
sr.reveal(".home__salt-1", { delay: 1200, origin: "left", distance: "120px" });
sr.reveal(".home__salt-2", { delay: 1200, origin: "right", distance: "120px" });

/* About */
sr.reveal(".about__data > *", { origin: "top" });
sr.reveal(".about__flour", { delay: 900 });
sr.reveal(".about__rosemary", { delay: 1200, origin: "bottom" });

/* Menu */
sr.reveal(".menu__header");
sr.reveal(".menu__dish-1", "menu__dish-2", "menu__dish-3", "menu__dish-4", {
  distance: "0",
  duration: 2000,
  rotate: { z: -30 },
});
sr.reveal(".menu__rosemary", "menu__flour-2", "menu__tomato", "menu__flour-4", {
  delay: 600,
});
sr.reveal(".menu__pepper", "menu__flour-3", "menu__flour-1", {
  delay: 900,
});

sr.reveal(".menu__info", {
  delay: 900,
  origin: "left",
});

/* Events */
sr.reveal(".events__data > *", { origin: "top" });
sr.reveal(".events__flour", { delay: 1200, origin: "bottom" });

/* Ingredients */
sr.reveal(".ingredients__data");
sr.reveal(".ingredients__images > *", {
  delay: 1200,
  distance: "0",
  scale: 1.5,
});
sr.reveal(".ingredients__img-1", { delay: 600, distance: "0", scale: 1.5 });

/* Contact */
sr.reveal("contact__map", { origin: "left" });
sr.reveal("contact__content", { origin: "right" });

/* Footer */
sr.reveal(".reservation__content, .footer__container");
