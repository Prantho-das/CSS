//selection
let email = document.querySelector('.email')
let form = document.querySelector('form')
let password = document.querySelector('.password')
let button = document.querySelector('button')
let mode = JSON.parse(localStorage.getItem("theme_mode"));
const check_toggle = document.querySelector("#check_toggle");
const toggle = document.querySelector(".toggle");
const toggle_icon = document.querySelector(".toggle_icon");
const check_box = document.querySelector(".check_box");
const body = document.body;
const img = document.querySelector('img');
//darkmode
window.addEventListener("load", () => {
    if (mode == true) {
        body.style.filter = "invert(1) hue-rotate(180deg)"
        img.style.filter = "invert(1) hue-rotate(180deg)"
        check_box.checked = true
        check_toggle.classList.add('toggle_effect');
        toggle_icon.classList.remove('fa-moon');
        toggle_icon.classList.add('fa-sun');
    }
})
check_toggle.addEventListener('click', () => {
    check_toggle.classList.toggle('toggle_effect');
    toggle_icon.classList.toggle('fa-sun');
    toggle_icon.classList.toggle('fa-moon');
    if (check_box.checked) {
        body.style.filter = "invert(0) hue-rotate(0deg)"
        img.style.filter = "invert(0) hue-rotate(0deg)"
        localStorage.setItem('theme_mode', false)
        check_box.checked = false;
    } else {
        localStorage.setItem('theme_mode', true)
        check_box.checked = true;
        body.style.filter = "invert(1) hue-rotate(180deg)"
        img.style.filter = "invert(1) hue-rotate(180deg)"
    }
})
//validation
form.addEventListener('submit', (e) => {
    var mailformat = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (email.value.match(mailformat) && (password.value).length >= 8) {
        e.returnValue = true;
    } else {
        e.returnValue = false;
        email.classList.toggle('error')
        password.classList.toggle('error')
    }
})
email.addEventListener('focusout', (e) => {
    if (e.target.value.length >=1) {
        e.target.classList.remove('error')
    } else {
        e.target.classList.add('error')
    }
})
password.addEventListener('focusout', (e) => {
    if (e.target.value.length >= 8) {
         e.target.classList.remove('error')
    } else {
         e.target.classList.add('error')
    }
})
//validation