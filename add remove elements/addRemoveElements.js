// Add and Remove Elements

document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container');
    var addBtn = document.getElementById('addBtn');
    var clearBtn = document.getElementById('clearBtn');
    var boxInput = document.getElementById('boxInput');

    addBtn.addEventListener('click', function() {
        var text = boxInput.value;
        if (text === '') {
            alert('Please enter some text');
            return;
        }
        var div = document.createElement('div');
        div.className = 'box';
        div.textContent = text;

        var removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.style.marginLeft = '10px';
        removeBtn.addEventListener('click', function() {
            div.remove();
        });

        div.appendChild(removeBtn);
        container.appendChild(div);
        boxInput.value = '';
    });

    clearBtn.addEventListener('click', function() {
        container.innerHTML = '';
    });
});
