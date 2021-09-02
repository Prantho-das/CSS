$(document).ready(function() {
  $(".slick").slick({
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
var p = document.querySelector(".up");
p.addEventListener("click", function i() {
  window.scrollTo(0, 0);
});
document.addEventListener("scroll", scrollo);
function scrollo() {
  if (window.pageYOffset > 100) {
    p.style.opacity = 1;
  } else {
    p.style.opacity = 0;
  }
}

var typed = new Typed(".type", {
  strings: ["Designer", "Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
var u = document.getElementById("clock");
var fa = document.getElementById("box");
u.addEventListener("click", click);
function click() {
  fa.classList.add("rotate");
  alert("ami the grat kahrap");
}
