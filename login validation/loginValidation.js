// Login Form Validation

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var userError = document.getElementById('userError');
    var passError = document.getElementById('passError');
    var result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var isValid = true;

        // Username validation
        if (username.value.trim() === '') {
            userError.textContent = 'Username is required';
            isValid = false;
        } else if (username.value.trim().length < 3) {
            userError.textContent = 'Username must be at least 3 characters';
            isValid = false;
        } else {
            userError.textContent = '';
        }

        // Password validation
        if (password.value.trim() === '') {
            passError.textContent = 'Password is required';
            isValid = false;
        } else if (password.value.trim().length < 6) {
            passError.textContent = 'Password must be at least 6 characters';
            isValid = false;
        } else {
            passError.textContent = '';
        }

        if (isValid) {
            result.textContent = 'Login successful!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Please fix the errors';
            result.style.color = 'red';
        }
    });
});
