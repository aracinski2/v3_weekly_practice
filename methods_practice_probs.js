// 1
const prompt = require("prompt-sync")({ sigint: true });
let word = prompt("Please enter a word");
console.log(word.toUpperCase());