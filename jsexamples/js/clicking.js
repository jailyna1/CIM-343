"use strict";
let redClickBox = document.getElementById("redClick");

redClickBox.classList.add("clickBox");

// redClickBox.addEventListener("click", function() {
//     //your actions go in here
// });

redClickBox.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "blue";
    redClickBox.innerHTML = "<h2>Box Clicked</h2>";
    // redClickBox.innerText = "<h2>Box Clicked</h2>";
});

redClickBox.addEventListener("mouseover", function() {
    redClickBox.style.backgroundColor = "rgba(0, 128, 0, 1.0)";
    document.querySelector("#heading1").innerText = "hello!";
});

redClickBox.addEventListener("mouseout", function() {
    redClickBox.style.backgroundColor = "red";
    document.querySelector("#heading1").innerText = "";
});