const svg = document.getElementById("mySVG");
const faqBlock = document.querySelector(".faq__block");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      svg.style.opacity = "1";
      svg.style.clipPath = "inset(0 0 0 0)";
    }
  });
}, options);

faqBlock && observer.observe(faqBlock);

const navBurger = document.querySelector(".hero-container .nav-burger");
const navBurgerClose = document.querySelector(".mobile-nav .nav-burger-close");
const mobileNavBurger = document.querySelector(".mobile-nav .nav-burger");
const mobileNav = document.querySelector(".mobile-nav");

navBurger &&
  navBurger.addEventListener("click", () => {
    mobileNav.classList.add("active");
    navBurger.style.display = "none";
    navBurgerClose.style.display = "block";
    mobileNavBurger.style.display = "none";
  });

navBurgerClose &&
  navBurgerClose.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    navBurger.style.display = "block";
    navBurgerClose.style.display = "none";
  });
