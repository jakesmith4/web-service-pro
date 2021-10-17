// Setup Date
const date = document.getElementById("date");
const fullYear = new Date().getFullYear();
date.innerHTML = fullYear;

// Nav Toggle
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  // navLinks.classList.toggle("show-links");
  navbar.classList.add("background");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = navLinks.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.querySelector(".navbar");
// Fixed Navbar
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > 84) {
    navbar.classList.add("fixed-nav");
    navbar.classList.add("background");
  } else {
    navbar.classList.remove("fixed-nav");
    navbar.classList.remove("background");
    linksContainer.style.height = 0;
  }
});

// Smooth Scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    console.log(element);
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
