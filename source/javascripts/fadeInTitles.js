function fade() {
  let titles = document.querySelector(".title");
  let opacity = 0.1;  // initial opacity
  let timer = setInterval(fadeIn, 200);
  function fadeIn(){
    if (opacity >= 1){
      clearInterval(timer);
    } else {
      titles.style.opacity = opacity;
      opacity += 0.1;
    }
  }
}




document.addEventListener("DOMContentLoaded", fade);
