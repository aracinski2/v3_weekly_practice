// 1
// const prompt = require("prompt-sync")({ sigint: true });
// let word = prompt("Please enter a word");
// console.log(word.toUpperCase());

// 2
const prompt = require("prompt-sync")({ sigint: true });
let number = prompt("Please enter a number:")
if (parseInt(number) > 100) {
  console.log("That's a big number");
}