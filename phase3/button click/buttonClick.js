// Button Click Events

document.addEventListener('DOMContentLoaded', function() {
    var message = document.getElementById('message');
    var clickBtn = document.getElementById('clickBtn');
    var toggleBtn = document.getElementById('toggleBtn');
    var selfBtn = document.getElementById('selfBtn');
    var countBtn = document.getElementById('countBtn');
    var countDisplay = document.getElementById('countDisplay');

    clickBtn.addEventListener('click', function() {
        message.textContent = 'Button was clicked!';
    });

    var clicked = false;
    toggleBtn.addEventListener('click', function() {
        if (clicked) {
            message.textContent = 'First message';
        } else {
            message.textContent = 'Second message';
        }
        clicked = !clicked;
    });

    selfBtn.addEventListener('click', function() {
        selfBtn.textContent = 'Clicked!';
        selfBtn.disabled = true;
    });

    var count = 0;
    countBtn.addEventListener('click', function() {
        count = count + 1;
        countDisplay.textContent = 'Clicked ' + count + ' times';
    });
});
