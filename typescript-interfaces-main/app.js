// Interface
// 1- Interfaces 
const userObj = {
    id: 101,
    name: "Sheraz",
    email: "sheraz@dev.com"
};
// Return a array like this [ 'id', 'name', 'email' ]
const keys = Object.keys(userObj);
console.log(keys);
keys.forEach((key) => {
    console.log(`${key} = ${userObj[key]}`);
});
const personData = {
    name: "Ali",
    email: "ali@dev.com",
    role: "admin"
};
console.log(personData["role"]);
const obj = {
    id: 101,
    name: "Usamn",
    email: "usman@dev.com",
    role: "seller"
};
Object.entries(obj).forEach(([key, val]) => {
    console.log(`${key} = ${val}`);
});
export {};
