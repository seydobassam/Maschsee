$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > window.innerHeight - 60) { 
          $('.navbar').addClass('solid');
          $('.navbar').removeClass('navbar-dark');
      } else {
          $('.navbar').removeClass('solid');
          $('.navbar').addClass('navbar-dark');
      }
    });
});