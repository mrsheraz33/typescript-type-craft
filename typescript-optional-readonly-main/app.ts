// 1- Optional

interface User  {
  name: string;
  email: string;
  phoneNum?: number  // Optional key (?)
}

// phoneNum is optional so it is not required in the object.
const userData:User = {
     name: "Sheraz",
     email: "sheraz@dev.com"
}

console.log(userData["email"]);


// 2- Readonly Fields

interface DataBase {
   readonly id: number | string,  // id is readonly
    title: string
}

const dataBase: DataBase ={
    id: "5672383JDXX",
    title: "Learning TypeScript"
}

// Cannot modify a readonly property.
// dataBase.id = 101;


// Example 

interface Product {
    readonly id: number | string; // readonly
    name: string;
    price: number;
    description?: string // optional
}

const laptop: Product = {
    id: 101,
    name : "Dell",
    price: 20000
    // description is optional
}

// print the key/values of object
const keys = Object.entries(laptop)
keys.forEach(([key, val])=>{
    console.log(`${key} = ${val}`);
})


export {}