// Interface
// 1- Interfaces 

// Interface are mostely used for creating a structure/blueprint of objects.
interface user {
    id: number;
    name: string;
    email: string
}

const userObj: user ={
    id : 101,
    name: "Sheraz",
    email : "sheraz@dev.com"
}

// Return a array like this [ 'id', 'name', 'email' ]
const keys = Object.keys(userObj) 
console.log(keys);
keys.forEach((key)=>{
    console.log(`${key} = ${userObj[key as keyof typeof userObj]}`);
})

// Declaration Merging
// declare with same name.
interface person {
    name: string,
}

interface person {
     email: string,
     role?: string // role is optional
}

const personData: person ={
    name : "Ali",
    email : "ali@dev.com",
    role : "admin"
}
console.log(personData["role"]);

// extends 
interface basicUser {
    id : number;
    name : string;
    email: string
}

// inherit basicUser property using extends ketword.
interface admin extends basicUser{
    role : string
}

const obj: admin ={
    id: 101,
    name :"Usamn",
    email : "usman@dev.com",
    role : "seller"
}

Object.entries(obj).forEach(([key , val])=>{
    console.log(`${key} = ${val}`);
})


export {}