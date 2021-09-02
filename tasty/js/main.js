const nav = document.querySelector("nav");
const hambarger = document.querySelector(".hambarger");
const navlinks = document.querySelector(".nav-links");
const back_to_top = document.querySelector(".back_to_top");
const theme = document.querySelector(".theme");
hambarger.addEventListener("click", () => {
  navlinks.classList.toggle("nav_active");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    back_to_top.style.display = "block";
  } else {
    back_to_top.style.display = "none";
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

const links = document.querySelectorAll(".link");
links.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.stopPropagation();
    links.forEach((e) => {
      e.classList.remove("activeNav");
    });
    e.classList.add("activeNav");
  });
});

const themechecker = () => {
  if (localStorage.getItem("theme")) {
    let themeoption = localStorage.getItem("theme");
    themeoption = JSON.parse(themeoption);
    if (!themeoption) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      theme.classList.remove('fa-moon')
      theme.classList.add('fa-sun')
    }
  }
};

const themechanger = () => {
  let themeoption = localStorage.getItem("theme");
  themeoption = JSON.parse(themeoption);
  if (themeoption) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    theme.classList.remove('fa-moon')
    theme.classList.add('fa-sun')
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    theme.classList.remove('fa-sun')
    theme.classList.add('fa-moon')
  }
};

theme.addEventListener("click", () => {
  let themeoption = localStorage.getItem("theme");
  themeoption = JSON.parse(themeoption);
  themechanger();
  localStorage.setItem("theme", JSON.stringify(!themeoption));
});
window.addEventListener("load", themechecker);
