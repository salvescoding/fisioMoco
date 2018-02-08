function attachEvents() {
  window.addEventListener("scroll", runScroll);
  selected();
}

function selected() {
  const links = document.querySelectorAll('div.navbar-wagon-right > a');
  let url = window.location.href;
  links.forEach(function(element){
    if(url.includes(element.pathname) === true) {
      //console.log(element);
      element.classList.add("selected");
    }
  });
}

function runScroll() {
  const nav = document.querySelector(".navbar-wagon");

   if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240)  {
     nav.classList.add("nav-scroll");
   } else {
     nav.classList.remove("nav-scroll");
   }

}


document.addEventListener("DOMContentLoaded", attachEvents);

