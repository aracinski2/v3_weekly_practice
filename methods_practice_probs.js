// 1
// const prompt = require("prompt-sync")({ sigint: true });
// let word = prompt("Please enter a word");
// console.log(word.toUpperCase());

// 2
// const prompt = require("prompt-sync")({ sigint: true });
// let number = prompt("Please enter a number:")
// if (parseInt(number) > 100) {
//   console.log("That's a big number");
// }

// 3
// const prompt = require("prompt-sync")({ sigint: true });
// let number1 = prompt("Please enter a number:");
// let number2 = prompt("Please enter another number:");
// console.log(parseInt(number1) + parseInt(number2));

// 4
// const prompt = require("prompt-sync")({ sigint: true });
// let reverseWord = prompt("Please enter a word");
// console.log(reverseWord.split("").reverse().join(""))

// 5
// const prompt = require("prompt-sync")({ sigint: true });
// let number = prompt("Please enter a number:");
// console.log(parseInt(number) * 10);

// 6
// const prompt = require("prompt-sync")({ sigint: true });
// let word1 = prompt("Please enter a word:");
// let word2 = prompt("Please enter another word:");

// console.log((word1 + " " + word2).toUpperCase());

// 7
// const prompt = require("prompt-sync")({ sigint: true });
// let word = prompt("Please enter a word:")
// console.log(word.length);

// 8
// const prompt = require("prompt-sync")({ sigint: true });
// let number = prompt("Please enter a number: ")
// if (parseInt(number) < 0) {
//   console.log("That's a negative number")
// }

// 9
const prompt = require("prompt-sync")({ sigint: true });
let number1 = prompt("Please enter a number: ");
let number2 = prompt("Please enter another number: ");

console.log(number1 * number2);