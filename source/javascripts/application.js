//= require jquery
//= require bootstrap-sprockets
//= require_tree .


function attachEvents() {
  window.addEventListener("scroll", runScroll);
}


function runScroll() {
  const nav = document.querySelector(".navbar-wagon");
  const links = document.querySelectorAll('div.navbar-wagon-right > a');

   if (document.body.scrollTop >= 380 || document.documentElement.scrollTop >= 380)  {
     nav.classList.add("nav-scroll");
   } else {
     nav.classList.remove("nav-scroll");
   }
}


document.addEventListener("DOMContentLoaded", attachEvents);

