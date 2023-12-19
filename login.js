document.getElementById("username").addEventListener("input", function() {
    clearErrorBox();
});


function toggleSignBox() {
    const SignupBox = document.getElementById("Signupbox");
    SignupBox.classList.toggle("active");

    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("active");
}

function toggleLoginBox() {
    const LoginBox = document.getElementById("Loginbox");
    LoginBox.classList.toggle("active");

    const SignupBox = document.getElementById("Signupbox");
    SignupBox.classList.toggle("active");
}

function closeBox(element) {
    const parentBox = element.closest('.signup-box, .login-box');
    parentBox.classList.remove('active');

    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("active");

    // Clear any existing messages
    const successBox = document.getElementById("successBox");
    const errorBox = document.getElementById("errorBox");
    successBox.classList.remove("active");
    errorBox.classList.remove("active");
}

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Send a request to the server using fetch
    fetch('signup.php', {
        method: 'POST',
        body: new FormData(document.getElementById('signup-form'))
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Record created successfully') {
            showSuccessMessage();
        } else {
            showErrorMessage(data);
        }
    })
    .catch(error => console.error('Error:', error));
});

function showSuccessMessage(username) {
    const successBox = document.getElementById("successBox");
    successBox.classList.add("active");
    
    // Update the "عضویت" text to the username
    const signupButton = document.getElementById("signupButton");
    signupButton.innerText = username;
}

function showErrorMessage(message) {
    const errorBox = document.getElementById("errorBox");
    errorBox.innerText = message;
    errorBox.classList.add("active");
}