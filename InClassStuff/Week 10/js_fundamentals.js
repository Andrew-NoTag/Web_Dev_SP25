// Task 1
alert("Hello World");
console.log("My first JavaScript assignment");
document.getElementById("output").innerText =
  "I just modified this element with JavaScript";

// Task 2
let name = "Andrew";
let age = 20;
let favoriteNum = 11.2;
console.log(
  `My name is ${name}, I am ${age} years old, and my favorite number is ${favoriteNum}.`
);

// Task 3
function calculate(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
}
calculate(1, 2);
calculate(3, 4);
calculate(5, 6);

// Task 4
function fahrenheitToCelsius(f) {
  let c = ((f - 32) * 5) / 9;
  alert(`${f}F to Celsius is ${c}C`);
}

function celsiusToFahrenheit(c) {
  let f = (c * 9) / 5 + 32;
  alert(`${c}C to Fahrenheit is ${f}F`);
}

// Task 5
function manipulateString(str) {
  let uppercaseString = str.toUpperCase();
  let length = str.length;
  alert(`Original string: ${str}\n
        Uppercase: ${uppercaseString}\n
        Number of characters: ${length}`);
}
manipulateString("This is Intro to Web Development!!!");

// Task 6
let isLightOn = true;

function lightSwitch() {
    isLightOn = !isLightOn;
    if (isLightOn) {
        let text = "Hi, I'm a light and I'm ON";
        document.getElementById("light").innerText = text;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        let text = "Hi, I'm a light and I'm OFF";
        document.getElementById("light").innerText = text;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}

// Task 7
function countByTwo(num) {
    let result = "";
    for (let i = 0; i <= num; i += 2) {
        result += i + " ";
    }
    document.getElementById("countByTwoOutput").innerText = result;
}
