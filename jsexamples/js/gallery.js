'use strict';

let allImages = document.querySelectorAll('img');

let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

let currentIndex = 0;
allImages[currentIndex].style.display = 'block';

function showNextImage() {
    allImages[currentIndex].style.display = 'none';
    currentIndex = currentIndex + 1;
    if(currentIndex == allImages.length){
        currentIndex = 0;
    }
    allImages[currentIndex].style.display = 'block';
}

function showPreviousImage() {
    allImages[currentIndex].style.display = 'none';
    currentIndex = currentIndex - 1;
    if(currentIndex > 0){
        currentIndex = allImages.length - 1;
    }
    allImages[currentIndex].style.display = 'block';
}

nextButton.addEventListener('click', showNextImage);
previousButton.addEventListener('click', showPreviousImage);

let autoCycle = false;
let cycleInterval;

startButton.addEventListener('click', function() {
    if(!autoCycle){
        cycleInterval = setInterval(showNextImage, 3000);
        autoCycle = true;
    }
});

stopButton.addEventListener('click', function() {
    clearInterval(cycleInterval);
    autoCycle = false;
});