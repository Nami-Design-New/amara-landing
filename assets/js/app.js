const menuToggle = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav_links");
const layer = document.querySelector(".layer");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  layer.classList.toggle("show");
});

layer.addEventListener("click", () => {
  navLinks.classList.remove("show");
  layer.classList.remove("show");
});

navLinks.querySelectorAll(".nav_link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navLinks.classList.remove("show");
    }
  });
});

$(document).ready(function () {
  if ($(window).width() > 768) {
    $("section").each(function () {
      const sectionDivs = $(this).find("[data-aos]");
      sectionDivs.each(function (index) {
        if (!$(this).attr("data-aos-delay")) {
          $(this).attr("data-aos-delay", (index + 1) * 50);
        }
      });
    });
  }
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
});

var phoneImgs = new Swiper(".phoneImgs", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 60,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 5,
    stretch: 10,
    depth: 200,
    modifier: 1.2,
    slideShadows: true,
  },
});
