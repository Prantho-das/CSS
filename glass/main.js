const password = document.getElementById("password");
const passwordInput = document.getElementById("passwordInput");
password.addEventListener('click',()=>{
    const lock=password.classList.contains('fa-lock')
    if(lock){
        password.classList.remove("fa-lock");
        password.classList.add("fa-eye");
        passwordInput.type = "text";
    }else{
        password.classList.remove("fa-eye");
        password.classList.add("fa-lock");
        passwordInput.type = "password";
    }
})