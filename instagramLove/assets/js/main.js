const span = document.querySelector('span');
const instagram_pic = document.querySelector(".instagram_pic")
const heart = document.querySelector('i')
let number=0
instagram_pic.addEventListener('dblclick', () => {
    span.innerText = number++;
    heart.classList.add('heart_glow')
    setTimeout(() => {
        heart.classList.remove('heart_glow')   
    }, 1200);
})