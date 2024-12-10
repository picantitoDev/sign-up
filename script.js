const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-msg");


function validatePasswords(){
    if (passwordField.value !== confirmPasswordField.value) {
        passwordField.setCustomValidity("Passwords do not match");
        confirmPasswordField.setCustomValidity("Passwords do not match");
        errorMessage.style.display = "block";
        errorMessage.style.color = "#C62E2E";
    } else {
        passwordField.setCustomValidity("");
        confirmPasswordField.setCustomValidity("");
        errorMessage.style.display = "none";
    }
}

passwordField.addEventListener("input", validatePasswords);
confirmPasswordField.addEventListener("input", validatePasswords);