function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function validateLogin() {
    let location = document.getElementById("location").value;
    let orgId = document.getElementById("org-id").value.trim();
    let userId = document.getElementById("user-id").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!location || !orgId || !userId || !password) {
        alert("Please fill in all fields.");
        return;
    }
    alert("Login successful!");
}
