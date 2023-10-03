function toggleSignBox() {
    const SignBox = document.getElementById("Signupbox");
    SignBox.classList.toggle("active");
    
    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("active");
}

function toggleLoginBox() {
    const LoginBox = document.getElementById("Loginbox");
    LoginBox.classList.toggle("active");

    const SignBox = document.getElementById("Signupbox");
    SignBox.classList.toggle("active");
}

function closeBox(element) {
    const parentBox = element.closest('.signup-box, .login-box');
    parentBox.classList.remove('active');

    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("active");
}


