// Live Preview while Typing

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('textInput');
    var preview = document.getElementById('preview');
    var counter = document.getElementById('counter');
    var maxLength = 50;

    input.addEventListener('input', function() {
        preview.textContent = input.value;
        counter.textContent = input.value.length + ' / ' + maxLength;
        if (input.value.length >= maxLength) {
            counter.style.color = 'red';
        } else {
            counter.style.color = 'black';
        }
    });
});
