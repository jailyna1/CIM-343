"use strict"; // Enables strict mode
let message = "Print out this message";

console.log(message);         // Logs to browser console
alert(message);               // Displays alert dialog

// Updates an HTML element's inner text
document.querySelector("#heading1").innerText = message;
// Or alternatively:
document.getElementById("heading1").innerText = message;