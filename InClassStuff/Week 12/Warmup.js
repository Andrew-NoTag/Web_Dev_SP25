// 1. Off-by-one Error
const cats = ["Milo", "Otis", "Garfield"];
const out1 = document.getElementById("example1");

for (let i = 0; i < cats.length; i++) {
  out1.innerHTML += `Cat #${i + 1}: ${cats[i]}<br>`;
}

// 2. Infinite Loop (simulate instead of actual infinite loop)
const out2 = document.getElementById("example2");
let j = 0;
while (j < 3) {
  out2.innerHTML += `Loop count: ${j}<br>`;
  j++;
}

// 4. Skips Last Item
const out4 = document.getElementById("example4");
const birds = ["Parrot", "Crow", "Sparrow"];
for (let i = 0; i < birds.length; i++) {
  out4.innerHTML += `Bird: ${birds[i]}<br>`;
}

// 5. Reversed Loop Error
const out5 = document.getElementById("example5");
const nums = [10, 20, 30, 40];
for (let i = nums.length - 1; i >= 0; i--) {
  out5.innerHTML += `Number: ${nums[i]}<br>`;
}
