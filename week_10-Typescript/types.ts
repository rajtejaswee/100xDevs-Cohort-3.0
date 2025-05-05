//Create two types User and Admin. Create a function that takes either a user or an admin, and return a string saying "Welcome, [name]"

type User = {
    name: string,
    age:number,
}

type Admin = {
    name: string,
    permission: boolean,
}

type UserOrAdmin = User | Admin

function greet(user: UserOrAdmin) {
    return "Welcome " + user.name;
}

let user = {
    name: "Raj",
    age: 24,
}

const greeting = greet(user);
console.log(greeting)