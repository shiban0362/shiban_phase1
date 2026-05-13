// Change Styles Using JavaScript

document.addEventListener('DOMContentLoaded', function() {
    var box = document.getElementById('styleBox');
    var redBtn = document.getElementById('redBtn');
    var blueBtn = document.getElementById('blueBtn');
    var greenBtn = document.getElementById('greenBtn');
    var bigBtn = document.getElementById('bigBtn');
    var smallBtn = document.getElementById('smallBtn');
    var classBtn = document.getElementById('classBtn');

    redBtn.addEventListener('click', function() {
        box.style.backgroundColor = 'red';
        box.style.color = 'white';
    });

    blueBtn.addEventListener('click', function() {
        box.style.backgroundColor = 'blue';
        box.style.color = 'white';
    });

    greenBtn.addEventListener('click', function() {
        box.style.backgroundColor = 'green';
        box.style.color = 'white';
    });

    bigBtn.addEventListener('click', function() {
        box.style.fontSize = '24px';
    });

    smallBtn.addEventListener('click', function() {
        box.style.fontSize = '14px';
    });

    classBtn.addEventListener('click', function() {
        box.classList.toggle('highlight');
    });
});
