//= require jquery
//= require bootstrap-sprockets
//= require_tree .


function attachEvents() {
  window.addEventListener("scroll", runScroll);
}


function runScroll() {
  const nav = document.querySelector(".navbar-wagon");
  const links = document.querySelectorAll(".navbar-wagon-link");

   if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100)  {
     nav.classList.add("nav-scroll");
     links.forEach(function(item) {
       item.classList.add("navbar-link-scroll");
     });
   } else {
     nav.classList.remove("nav-scroll");
     links.forEach(function(item) {
       item.classList.remove("navbar-link-scroll");
     });
   }
}


document.addEventListener("DOMContentLoaded", attachEvents);

