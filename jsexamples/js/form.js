'use strict';

let button = document.getElementById('submit');
let select = document.getElementById('animals');

select.addEventListener('change', function() {
    console.log('Selected animal: ', select.value);
});

button.addEventListener('click', function() {
    if(select.value === 'koala') {
        addImages.innerHTML = '<img src="images/koala.jpg" alt="Koala">';
    }
});
