// function myFunction() {
//   console.log("A");
//   console.log("M");
//   console.log("I");
//   console.log("T");
// }

// myFunction();

// function addTwoNumbers(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     console.log(num1 + num2);
//   } else {
//     console.log("Both argument should be number");
//     // console.log(num1 + num2);
//   }
// }
// function addTwoNumbers(num1, num2) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     let Result = num1 + num2;
//     console.log("hello function bhai");
//     return Result;
//   } else {
//     console.log("Both argument should be number");
//   }
// }

// const Result = addTwoNumbers(5, 3);
// console.log(Result);

// function userName(user) {
//   return `${user} just logedin`;
// }

// console.log(userName("Amit"));

// function userName1(user) {
//   if (user === undefined) {
//     console.log("Pass an argument");
//     return;
//   }
//   return `${user} just logedin`;
// }

// console.log(userName1());

// function userName1(user) {
//   if (!undefined) {
//     console.log("Pass an argument");
//     return;
//   }
//   return `${user} just logedin`;
// }

// console.log(userName1());

function userName1(user = "Amit") {
  if (user === undefined) {
    console.log("Pass an argument");
    return;
  }
  return `${user} just logedin`;
}

console.log(userName1());
