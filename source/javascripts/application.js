//= require jquery
//= require bootstrap-sprockets
//= require_tree .

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


document.addEventListener("DOMContentLoaded", init);

