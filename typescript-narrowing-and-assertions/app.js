// 1- Type Narrowing
const userData = (val) => {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        return val.toFixed(2);
    }
};
console.log(userData("Sheraz"));
console.log(userData(30.63438));
// 2- Type Assertion
// Method 1 --> mostly used
const value = "Hello, Pakistan";
let num = value.length;
console.log(num);
// Method 2 --> avoid this method 
const someValue = "Hello, India";
let strLength = someValue.length;
console.log(strLength);
// 3- DOM Manipulation
const input = document.querySelector("#input");
input.value = "Hello Shearz";
console.log(input);
const link = document.querySelector("#link");
link.href = "https://google.com";


