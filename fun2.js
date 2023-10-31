// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200, 400, 500));

// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200, 400, 500, 600, 700));

// const obj = {
//   id: 1,
//   userName: "Amit",
//   age: 25,
// };

// function handleObjects(anyobj) {
//   return `Username is ${anyobj.name} and age ${anyobj.age}.`;
// }

// // console.log(handleObjects(obj));
// let objecta = handleObjects({
//   name: "Amit",
//   age: 25,
// });
// console.log(objecta);

const myArray = [10, 20, 30, 40, 50, 60];

function handlearray(getArray) {
  return getArray[1];
}

// console.log(handlearray(myArray));
console.log(handlearray([10, 100, 30, 40, 50, 60]));
