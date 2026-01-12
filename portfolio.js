document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents page from refreshing

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('message');

    // Simple validation logic
    if (password.length < 8) {
        feedback.textContent = "Password must be at least 8 characters.";
        feedback.style.color = "#ff4d4d";
    } else {
        feedback.textContent = `Welcome back, ${name}! Signing you in...`;
        feedback.style.color = "#00ff88";

        // Disable button to prevent double-clicks in 2026
        document.querySelector('.signin-btn').disabled = true;

        console.log("Form Submitted:", { name, email, password });
    }
});
