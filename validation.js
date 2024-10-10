document.getElementById('myForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate username
    if (!/^[a-z0-9]{4,12}$/.test(username)) {
        alert("Username must be 4-12 characters long and contain only lowercase letters or numbers.");
        return;
    }

    // Validate email
    if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,4}$/.test(email)) {
        alert("Email must contain '@' and end with .net, .com, .org, or .edu.");
        return;
    }

    // Validate phone number
    if (!/^\(\d{3}\)-\d{3}-\d{4}$/.test(phone)) {
        alert("Phone number must be in the format (123)-456-7890.");
        return;
    }

    // Validate password
    if (password.length <= 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        alert("Password must be greater than 8 characters and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
};
