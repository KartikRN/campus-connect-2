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
//intro
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo('.hero',{opacity:0},{opacity:1,duration:1},'-=0.75')
