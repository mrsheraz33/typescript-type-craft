// TypeScript Basic 
// 1- Type annotations
let str; // annotations
str = "Hello, Sheraz";
// (string, number, boolean)
const projectTitle = "E-Commers";
const num = 403;
const isRunning = true;
// print all data 
console.log(projectTitle, num, isRunning);
// 2- Arrays --> use a list to store multiple values.
let users = ["Ali", "Usman", "Sheraz"]; // only allow string data
let numbers = [10, 40, 60]; // only allow number data
// The list is store two type of data like string or number.
const data = ["Sheraz", "Usman", 30, 60];
console.log(data[2]); // 30
// 3- Objects --> Defined the structure of data
let obj = {
    name: "Sheraz",
    age: 22,
    isActive: false
};
// print single value
console.log(obj.name); // Sheraz
console.log(obj["age"]); // 22
// printing the value of object using for-in loop
for (let val in obj) {
    console.log(`${val} = ${obj[val]}`);
}
// 4- Functions
// the return type is void
function name(name) {
    console.log(`Hello, ${name}`);
}
name("Sheraz");
// the return type is number
const calculate = (amount) => {
    return amount * 20;
};
console.log(calculate(30));
// optional parameters 
const userData = (firstName, lastName) => {
    if (lastName)
        return `Hello, ${firstName} ${lastName}`;
    return `Hello, ${firstName}`;
};
let fun1 = userData("Sheraz");
let fun2 = userData("Mr", "Ali");
console.log(fun1);
console.log(fun2);
// Default Parameters
function greet(name, num = 20) {
    console.log(`The name is ${name}, and number is ${num}`);
}
greet("Sheraz"); // using default number like --> 20
greet("Sheraz", 30);
export {};
