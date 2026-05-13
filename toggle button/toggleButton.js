// Toggle Button Functions

document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');
    var showBtn = document.getElementById('showBtn');
    var body = document.body;
    var themeBtn = document.getElementById('themeBtn');
    var toggleInput = document.getElementById('toggleInput');
    var disableBtn = document.getElementById('disableBtn');

    showBtn.addEventListener('click', function() {
        if (content.style.display === 'none') {
            content.style.display = 'block';
            showBtn.textContent = 'Hide Content';
        } else {
            content.style.display = 'none';
            showBtn.textContent = 'Show Content';
        }
    });

    var isDark = false;
    themeBtn.addEventListener('click', function() {
        if (isDark) {
            body.style.backgroundColor = '#f5f5f5';
            body.style.color = 'black';
            themeBtn.textContent = 'Dark Mode';
        } else {
            body.style.backgroundColor = '#222';
            body.style.color = 'white';
            themeBtn.textContent = 'Light Mode';
        }
        isDark = !isDark;
    });

    disableBtn.addEventListener('click', function() {
        if (toggleInput.disabled) {
            toggleInput.disabled = false;
            toggleInput.style.opacity = '1';
            disableBtn.textContent = 'Disable Input';
        } else {
            toggleInput.disabled = true;
            toggleInput.style.opacity = '0.5';
            disableBtn.textContent = 'Enable Input';
        }
    });
});
