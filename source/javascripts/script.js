function attachEvents() {
  window.addEventListener("scroll", runScroll);
  init();
}

function init() {
  let title = document.querySelector(".title");
  let opacity = 0.1;  // initial opacity
  let timer = setInterval(fadeIn, 200);
  function fadeIn(){
    if (opacity >= 1){
      clearInterval(timer);
    } else {
      title.style.opacity = opacity;
      opacity += 0.1;
    }
  }
}

function runScroll() {
  const nav = document.querySelector(".navbar-wagon");
  const links = document.querySelectorAll('div.navbar-wagon-right > a');

   if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240)  {
     nav.classList.add("nav-scroll");
   } else {
     nav.classList.remove("nav-scroll");
   }
}


document.addEventListener("DOMContentLoaded", attachEvents);

