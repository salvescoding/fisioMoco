// Select Contact informations

function contactInfo() {
  const personal = document.querySelector(".personal");
  const where = document.querySelector(".where");

}


// Specialities now apppear as selected when you are on the page
function selected() {
  const links = document.querySelectorAll('div.navbar-wagon-right > a');
  links.forEach(function(element){
    if(window.location.href.includes(element.pathname) === true) {
      //console.log(element);
      element.classList.add("selected");
    }
  });
}

// Navbar change background color once you scroll
function runScroll() {
  const nav = document.querySelector(".navbar-wagon");

   if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280)  {
     nav.classList.add("nav-scroll");
   } else {
     nav.classList.remove("nav-scroll");
   }
}

// Hidden menu bar

function menuBar() {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");

  menu.addEventListener("click", function(){
    if(overlay.style.width === "0%") {
      overlay.style.width = "100%";
      menu.innerText = "Fechar";
    }
    else {
      overlay.style.width = "0%";
      menu.innerText = "Menu";
    }
  })
}




function attachEvents() {
  window.addEventListener("scroll", runScroll);
  selected();
  contactInfo();
  menuBar();
}



document.addEventListener("DOMContentLoaded", attachEvents);

