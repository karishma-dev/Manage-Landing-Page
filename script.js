// Variables
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const nav = document.getElementById("nav");
const form = document.forms.email;
const inputForm = document.getElementById("email-input");
const error = document.querySelector(".error");

// Event Listener to open/close navigation menu in mobile using hamburger icon
hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  nav.classList.toggle("active");
})

// Event Listener to close navigation menu in mobile using Navigation items
navItem.forEach((item) => {
     item.addEventListener("click", function(){
       hamburger.classList.remove("active")
       navMenu.classList.remove("active");
       nav.classList.remove("active");
     })
});

// Swiper for testinomials
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
      600: {
        slidesPerView: 1.45,
        spaceBetween: 0,
      },
      992: {
        initialSlide: 1,
        slidesPerView: 2.43,
        spaceBetween: 40,
      },
    },
    cssmode: true,
    mousewheel: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      centeredSlides: true,
      clickable: true,
    },
});

// Regular Expression for validity of email
let regex = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

// EventListener for form to show error on wrong email format
form.addEventListener("submit", function(event){

  event.preventDefault();

  if(!inputForm.value){
    error.classList.add("show");
    inputForm.classList.add("show");
    error.innerHTML = "Enter Email";
    return;
  }
  if(!regex.test(inputForm.value)){
    error.classList.add("show");
    inputForm.classList.add("show");
    error.innerHTML="Whoops, make sure it's an email";
    return;
  }

  error.classList.remove("show");
  inputForm.classList.remove("show");
  error.innerHTML = "";
  inputForm.value = "";
  return;

})