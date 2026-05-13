// Even/Odd Checker

document.addEventListener('DOMContentLoaded', function() {
    var checkBtn = document.getElementById('checkBtn');
    var numberInput = document.getElementById('numberInput');
    var result = document.getElementById('result');

    checkBtn.addEventListener('click', function() {
        var num = parseInt(numberInput.value);
        if (isNaN(num)) {
            result.textContent = 'Please enter a valid number';
            result.style.color = 'red';
        } else if (num % 2 === 0) {
            result.textContent = num + ' is EVEN';
            result.style.color = 'green';
        } else {
            result.textContent = num + ' is ODD';
            result.style.color = 'blue';
        }
    });
});
