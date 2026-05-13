// Form Submit - Prevent Default and Validate

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var isValid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameInput.style.borderColor = 'red';
            isValid = false;
        } else if (nameInput.value.trim().length < 3) {
            nameError.textContent = 'Name must be at least 3 characters';
            nameInput.style.borderColor = 'red';
            isValid = false;
        } else {
            nameError.textContent = '';
            nameInput.style.borderColor = 'green';
        }

        // Email validation
        var emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailError.textContent = 'Email is required';
            emailInput.style.borderColor = 'red';
            isValid = false;
        } else if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1) {
            emailError.textContent = 'Please enter a valid email';
            emailInput.style.borderColor = 'red';
            isValid = false;
        } else {
            emailError.textContent = '';
            emailInput.style.borderColor = 'green';
        }

        if (isValid) {
            successMsg.textContent = 'Form submitted successfully!';
            successMsg.style.color = 'green';
        } else {
            successMsg.textContent = '';
        }
    });
});
