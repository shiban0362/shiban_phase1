// Dynamic List - Add and Remove Items

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('itemInput');
    var addBtn = document.getElementById('addBtn');
    var list = document.getElementById('itemList');
    var clearBtn = document.getElementById('clearBtn');

    addBtn.addEventListener('click', function() {
        var text = input.value.trim();
        if (text === '') {
            alert('Please enter an item');
            return;
        }

        var li = document.createElement('li');
        li.textContent = text;

        var removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '10px';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeBtn);
        list.appendChild(li);
        input.value = '';
        input.focus();
    });

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addBtn.click();
        }
    });

    clearBtn.addEventListener('click', function() {
        list.innerHTML = '';
    });
});
