// To-Do List with Checkboxes

document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('taskInput');
    var addBtn = document.getElementById('addBtn');
    var list = document.getElementById('taskList');
    var count = document.getElementById('count');
    var clearBtn = document.getElementById('clearBtn');

    function updateCount() {
        var total = list.children.length;
        var checked = list.querySelectorAll('input[type="checkbox"]:checked').length;
        count.textContent = (total - checked) + ' remaining / ' + total + ' total';
    }

    addBtn.addEventListener('click', function() {
        var text = input.value.trim();
        if (text === '') {
            alert('Please enter a task');
            return;
        }

        var li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
                span.style.color = 'gray';
            } else {
                span.style.textDecoration = 'none';
                span.style.color = 'black';
            }
            updateCount();
        });

        var span = document.createElement('span');
        span.textContent = text;
        span.style.flex = '1';
        span.style.marginLeft = '10px';

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
            updateCount();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = '';
        input.focus();
        updateCount();
    });

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addBtn.click();
        }
    });

    clearBtn.addEventListener('click', function() {
        var items = list.querySelectorAll('li');
        for (var i = 0; i < items.length; i++) {
            var checkbox = items[i].querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                items[i].remove();
            }
        }
        updateCount();
    });
});
