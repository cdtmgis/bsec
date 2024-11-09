// Function to toggle password visibility
function togglePasswordVisibility() {
    var passwordField = document.getElementById('password');
    var toggleBtn = document.getElementById('toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleBtn.textContent = 'Show';
    }
}

// Array of users
const users = [
    { username: 'iom', password: 'okalala' },
    { username: 'iom', password: 'dudongo' },
    { username: 'iom', password: 'mtia' }
];

// Login form submission handling
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Check if the entered username and password match any user in the array
    var user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to another page on successful login
        window.location.href = 'map.html'; 
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

