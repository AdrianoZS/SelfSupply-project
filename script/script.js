window.onscroll = function () { scrollToTop() };

function scrollToTop() {
    if (document.documentElement.scrollTop > 50) {
      element = document.getElementsByClassName("scroll-event");
      element[0].style.display = "flex";
    } else {
      element = document.getElementsByClassName("scroll-event");
      element[0].style.display = "none";
    }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
