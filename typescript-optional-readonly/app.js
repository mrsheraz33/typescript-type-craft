// 1- Optional
// phoneNum is optional so it is not required in the object.
const userData = {
    name: "Sheraz",
    email: "sheraz@dev.com"
};
console.log(userData["email"]);
const dataBase = {
    id: "5672383JDXX",
    title: "Learning TypeScript"
};
const laptop = {
    id: 101,
    name: "Dell",
    price: 20000
    // description is optional
};
// print the key/values of object
const keys = Object.entries(laptop);
keys.forEach(([key, val]) => {
    console.log(`${key} = ${val}`);
});
export {};
