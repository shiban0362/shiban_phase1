// Change Text Dynamically

document.addEventListener('DOMContentLoaded', function() {
    var demoText = document.getElementById('demoText');
    var changeBtn = document.getElementById('changeBtn');
    var toggleBtn = document.getElementById('toggleBtn');
    var counter = document.getElementById('counter');
    var countBtn = document.getElementById('countBtn');
    var htmlBtn = document.getElementById('htmlBtn');

    changeBtn.addEventListener('click', function() {
        demoText.textContent = 'Text has been changed!';
    });

    var isOriginal = true;
    toggleBtn.addEventListener('click', function() {
        if (isOriginal) {
            demoText.textContent = 'Toggled Text';
        } else {
            demoText.textContent = 'Original Text';
        }
        isOriginal = !isOriginal;
    });

    var count = 0;
    countBtn.addEventListener('click', function() {
        count = count + 1;
        counter.textContent = 'Count: ' + count;
    });

    htmlBtn.addEventListener('click', function() {
        demoText.innerHTML = '<strong>Bold HTML Content</strong>';
    });
});
