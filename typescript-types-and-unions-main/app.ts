// 1- Type Aliases

// types is a more flexible than interfaces it use anywhere like primitive valuas.
type user = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

const userData: user ={
    id: 1,
    name: "sheraz",
    email: "sheraz@dev.com",
    isActive: true
}

console.log(userData["isActive"]) // true

// used for primitive valuesm

type person = string | number | boolean

let per: person = "Sheraz";
per = false
per = 30

console.log(per); // 30

// like array
type array = string | number

const userArray: array[] = ["Usman", "Ali", 40, 50]

for(let val of userArray){
    console.log(val);
}

// Intersection 
type data1 = {
    id: number,
    name: string
}

type data2 = {
  email: string,
  isActive: boolean
}

type dataMerg = data1 & data2 

const currentUser:dataMerg = {
     id: 101,
     name: "Ali",
     email: "ali@dev.com",
     isActive: false
}

const objData = Object.entries(currentUser)
objData.forEach(([key, val])=>{
    console.log(`${key} = ${val}`);
})

// 2- Union Types
// that contains a multiple types of data
let userId: string | number ;

userId = 101;
userId = "id73823790"

// like array
const data: (string | number | boolean)[] = ["sheraz", 30, false]
console.log(data);

// 3- Enums vs Literal Types
// Enums --> is used for old project.

enum userStatus {
    pending =  "PENDING",
    success =  "SUCCESS",
    failed =  "FAILED"
}

const user1 = userStatus.success
console.log(user1);

// Literal Types ---> are often preferred over enums 
// because they are simpler and more flexible.

type status = "pending" | "success" | "failed"
const currentStatus: status = "pending"

console.log(currentStatus);

export {}