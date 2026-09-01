// 1- Type Aliases
const userData = {
    id: 1,
    name: "sheraz",
    email: "sheraz@dev.com",
    isActive: true
};
console.log(userData["isActive"]); // true
let per = "Sheraz";
per = false;
per = 30;
console.log(per); // 30
const userArray = ["Usman", "Ali", 40, 50];
for (let val of userArray) {
    console.log(val);
}
const currentUser = {
    id: 101,
    name: "Ali",
    email: "ali@dev.com",
    isActive: false
};
const objData = Object.entries(currentUser);
objData.forEach(([key, val]) => {
    console.log(`${key} = ${val}`);
});
// 2- Union Types
// that contains a multiple types of data
let userId;
userId = 101;
userId = "id73823790";
// like array
const data = ["sheraz", 30, false];
console.log(data);
// 3- Enums vs Literal Types
// Enums --> is used for old project.
var userStatus;
(function (userStatus) {
    userStatus["pending"] = "PENDING";
    userStatus["success"] = "SUCCESS";
    userStatus["failed"] = "FAILED";
})(userStatus || (userStatus = {}));
const user1 = userStatus.success;
console.log(user1);
const currentStatus = "pending";
console.log(currentStatus);
export {};
