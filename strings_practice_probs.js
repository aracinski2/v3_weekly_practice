// 1

// let fname = "billy"
// let lname = "bob"
// console.log(fname + " " + lname)

// 2
// let fname = "billy"
// let lname = "bob"
// console.group(`${fname} ${lname}`)

// 3
// const prompt = require("prompt-sync")({ sigint: true });
// var word = prompt("Please input a word");
// if (word === "marco") {
//   console.log("polo")
// }

// 4
// let color1 = "blue";
// let color2 = "red";
// let color3 = "green";
// console.log("My favorite colors are " + color1 + ", " + color2 + ", " + color3 + "!")

// 5
// let color1 = "blue";
// let color2 = "red";
// let color3 = "green";

// console.log(`My favorite colors are ${color1}, ${color2}, ${color3}!`)

// 6
// const prompt = require("prompt-sync")({ sigint: true });
// let name = prompt("What is your name?", "")
// if (name != "Santa") {
//   console.log("You're not Santa");
// }

// 7
// let title = "Harry Potty"
// let author = "JK Rowling"
// console.log("There is a book called " + title + ", by the author " + author + ".")

// 8
// let title = "Harry Potty"
// let author = "JK Rowling"
// console.log(`There is a book called ${title}, by the author ${author}.`)

// 9
const prompt = require("prompt-sync")({ sigint: true });
let password = prompt("Please enter your password:");
if (password === "Joshua") {
  console.log("Shall we play a game?");
} else {
  console.log("Access Denied");
}