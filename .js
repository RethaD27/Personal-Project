document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // You can implement your login authentication logic here
    // For simplicity, let's assume the login is successful
    if (username === "user" && password === "password") {
        document.getElementById("loginForm").reset();
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("usernameDisplay").textContent = username;
        // You can populate math-related content dynamically here
        document.getElementById("mathContent").innerHTML = "<p>Math lessons, exercises, and more!</p>";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
