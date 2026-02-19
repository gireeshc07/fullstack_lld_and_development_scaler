// Reading the output in JavaScript
console.log("Hello World");

// Variable Declaration in JavaScript
var x = 1;
console.log(x);
x = "var";
console.log(x);

let y = 2;
console.log(y);
y = "let";
console.log(y);

const z = 3;
console.log(z);
// z = "const"; // TypeError: Assignment to constant variable.

// Numbers
const a = 10;
const b = -10;
const c = 10.345;
const d = -10.345;
const e = 2 / 0;
console.log(a, b, c, d, e);

// Strings
const g = "g";
const h = "Hello World";
console.log(g, h);

// Boolean
const isEven = true;
const isOdd = false;
console.log("is Even", isEven);
console.log("is Odd", isOdd);

// Null
let i = null;
console.log(i);
// i = 30;
// console.log(i);

// Undefined
let j;
console.log(j);

// Not defined
// console.log(k);

// typeof
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof g, g);
console.log(typeof h, h);
console.log(typeof i, i);
console.log(typeof j, j);
console.log(typeof isEven, isEven);
console.log(typeof isOdd, isOdd);

// arrays
const arr = [1, true, null, "data", ["123"]];
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));

// objects
const person = {
  // key: value
  firstName: "Aryan",
  lastName: "xxx",
  phoneNo: "987xxxxxxx",
  age: 20,
};
console.log(person);
console.log(typeof person);
console.log(person.firstName);
console.log(typeof person.firstName);

// functions
// whenever you want to do a specific task again and again then you create a function
// expecting parameters
function coffeeMachine(quantity, drink) {
  const itme = "I need " + quantity + drink;
  return itme;
}
// passing arguments
console.log(coffeeMachine("200ml ", "black coffe"));
console.log(coffeeMachine("200ml ", "Mocha"));

// map
const map = new Map([
  ["name", "aryan"],
  ["age", 25],
]);
console.log(map);
console.log(map.get("name"));

// set (only unique items should be there)
const set = new Set([1, 2, 3, 2, 3, 1, 2, 3, 1]);
console.log(set);
set.add(1);
set.add(2);
console.log(set);
set.add(4);
console.log(set);

// base model of car
const car = {
  name: "Amaze",
  brand: "Honda",
  year: 2025,
};
// console.log(car);

// CRUD - Operations on Objecy
// Adding new key:value pairs in object
car.AC = true;
car.sunRoof = true;
car.cameraAllSides = true;
// console.log(car);

// Modifying existing data
car.sunRoof = false;
// console.log(car);

// Reading data from object
// console.log(car.name);

// Deleting data from object
delete car.sunRoof;
// console.log(car);

// Utility Functions
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

// for-in
for (let key in car) {
  console.log(key);
  console.log(car[key]);
  // console.log(car.key);
}

// arrays
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// add a new element at last
// remove a element from last
arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);

// shift and unshift
// unshift is used to add numbers / data type at starting index
arr1.unshift(789);
console.log(arr1);
// shift is used to remove number/data type from starting index
arr1.shift();
console.log(arr1);

// different types of loops
// for-in(simple traditional loop)
for (let i = 0; i < arr.length; i++) {
  console.log(arr1[i]);
}
// for-each
arr1.forEach((val, idx) => {
  console.log(val, idx);
});
// for-of -> rarely used
for (let val of arr1) {
  console.log(val);
}
