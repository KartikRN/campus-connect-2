const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");
 
    burger.addEventListener("click", () => {
      //Toggle Nav
    
      
        nav.classList.toggle("nav-active");
      
      //Animate links
      navlinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navlinkFade 0.5s ease forwards ${
            index / 7 + 1
          }s`;
        }
      });
        //Burger animation
        burger.classList.toggle('toggle');
    });

  
};
navSlide();


//intersection observers
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-about");
const sectionTwo = document.querySelector('.section-center');
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      // appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
 

