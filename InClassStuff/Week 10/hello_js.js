// Write an alert that says "Hello World"
// alert("Hello World");

// Console log "Hello World"
// console.log("Hello World");

// Change title
let hello = "Hello World";
let goodbye = "Goodbye World";

document
  .getElementById("changeTitleButton")
  .addEventListener("click", function () {
    if (document.getElementById("title").innerHTML == "Hello World") {
      document.getElementById("title").innerHTML = goodbye;
    } else {
      document.getElementById("title").innerHTML = hello;
    }
  });

// Write a statement that adds 5 + 6
document.getElementById("alertButton").addEventListener("click", function () {
  alert(5 + 6);
});

// hobby
let sport = "volleyball";
let position = "setter";
document.getElementById("hobby").innerText =
  "I like to play " + sport + " and I play as a " + position + ".";

// math
let num1 = 11;
let num2 = 19;
document.getElementById("math").innerText = 
    num1 + " over " + num2 + " is " + (num1 / num2).toPrecision(8) + ".";

// boolean
let string1 = "11";
document.getElementById("boolean").innerText =
    num1 + "(num) equals " + string1 + "(string) is " + (num1 == string1) + "."; // true, amazing
