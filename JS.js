document.addEventListener('DOMContentLoaded', function() {

  var navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  /*multiple browser-specific gradient definitions to ensure browser compatibility*/ 
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scroll = window.scrollY;

    if (scroll >= 100) {
      navbar.style.background = '#0D0D0D';
      navbar.style.background = '-moz-linear-gradient(top,#0D0D0D 0%, #0D0D0D 100%)';
      navbar.style.background = '-webkit-gradient(linear, left top, left bottom, color-stop(0%,#0D0D0D), color-stop(100%,#0D0D0D))';
      navbar.style.background = '-webkit-linear-gradient(top, #0D0D0D 0%,#0D0D0D 100%)';
      navbar.style.background = '-o-linear-gradient(top, #0D0D0D 0%,#0D0D0D 100%)';
      navbar.style.background = '-ms-linear-gradient(top, #0D0D0D 0%,#0D0D0D 100%)';
      navbar.style.background = 'linear-gradient(to bottom, #0D0D0D 0%,#0D0D0D 100%)';
    } else {
      navbar.style.background = 'linear-gradient(to bottom, #000,#0000)';
    }
  });

});  

function changeText() {
  var button = document.querySelector('.more_button');
  if (button.innerHTML === "READ MORE STORIES ON OUR BLOG") {
    button.innerHTML = "READ MORE STORIES ON OUR NEWS PAGE";
  } else {
    button.innerHTML = "READ MORE STORIES ON OUR BLOG";
  }
}