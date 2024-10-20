document.addEventListener("DOMContentLoaded", function() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    username.addEventListener("input", validateUsername);
    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);

    function validateUsername() {
        const usernameError = document.getElementById("usernameError");
        if (username.value.trim() === '') {
            usernameError.textContent = "Username is required.";
            username.classList.add("error");
        } else {
            usernameError.textContent = "";
            username.classList.remove("error");
        }
    }

    function validateEmail() {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const emailError = document.getElementById("emailError");
        if (!email.value.match(emailPattern)) {
            emailError.textContent = "Invalid email format.";
            email.classList.add("error");
        } else {
            emailError.textContent = "";
            email.classList.remove("error");
        }
    }

    function validatePassword() {
        const passwordError = document.getElementById("passwordError");
        if (password.value.length < 4) {
            passwordError.textContent = "Password must be at least 4 characters.";
            password.classList.add("error");
        } else {
            passwordError.textContent = "";
            password.classList.remove("error");
        }
    }

    function validateConfirmPassword() {
        const confirmPasswordError = document.getElementById("confirmPasswordError");
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPassword.classList.add("error");
        } else {
            confirmPasswordError.textContent = "";
            confirmPassword.classList.remove("error");
        }
    }

    // Form submission validation
    document.getElementById("signupForm").addEventListener("submit", function(e) {
        validateUsername();
        validateEmail();
        validatePassword();
        validateConfirmPassword();

        if (username.classList.contains("error") || email.classList.contains("error") || password.classList.contains("error") || confirmPassword.classList.contains("error")) {
            e.preventDefault(); // Prevent form submission if any input is invalid
        }
    });
});
