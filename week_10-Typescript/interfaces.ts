interface Users {
    name: string,
    age: number,
    address: {
        city: string,
        country: string,
        pincode:number,
    }
}

// Note: to make any key optional we add "?"
// Example
interface Users1 {
    name: string,
    age: number,
    address?: {
        city: string,
        country: string,
        pincode:number,
    }
}

let user2 : Users = {
    name: "Rahul",
    age: 21,
    address: {
        city:"Delhi",
        country: "India",
        pincode: 110071
    }
}

function greet(user: Users) {
    return "Hello " + user.name + " of age " + user.age + " from city " + user.address.city; 
}

const greetings = greet(user2)

console.log(greetings)
