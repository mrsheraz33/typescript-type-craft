// 1- Type Narrowing

const userData = (val: string | number) => {
  if (typeof val === "string") {
    return val.toUpperCase();

  } else {
    return val.toFixed(2);
  }
};

console.log(userData("Sheraz"));
console.log(userData(30.63438));

// 2- Type Assertion
// Method 1 --> mostly used
const value: any = "Hello, Pakistan"
let num: number = (value as string).length

console.log(num);

// Method 2 --> avoid this method 
const someValue: any = "Hello, India"
let strLength: number = (<string>someValue).length
console.log(strLength);

// 3- DOM Manipulation
const input = document.querySelector("#input") as HTMLInputElement
input.value = "Hello Shearz"
console.log(input);

const link = document.querySelector("#link") as HTMLAnchorElement
link.href = "https://google.com"

export {}
