'use strict';

let mainTitle = document.getElementById('mainTitle');
let colorMappingTitle = document.getElementById('color-mapping');
let receptionTitle = document.getElementById('receptionTitle');

colorMappingTitle.addEventListener('click', function() {
    console.log('Color Mapping clicked');
    document.querySelector('.color-mapping').classList.toggle('glow');

    colorMappingTitle.innerHTML = colorMappingTitle.innerHTML === 'Color Mapping' ? 'Color Mapping (Glowing)' : 'Color Mapping';
});

receptionTitle.addEventListener('mouseover', function() {
    console.log('Reception Title hovered');
    document.body.classList.toggle('dark-theme');

    receptionTitle.style.color = 'gold';
});

mainTitle.addEventListener('dblclick', function() {
    console.log('Main Title double clicked');
    
    mainTitle.classList.toggle('big-title');
    mainTitle.style.textShadow = '0px 0px 10px white';
    document.querySelectorAll('.pic').forEach(function(pic) {
        pic.classList.toggle('border-change');
    });
});