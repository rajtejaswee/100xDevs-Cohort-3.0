interface User {
name:string,
age:number,
}
function sumOfAges(user1:User, user2:User):number {
return user1.age + user2.age
}

const result = sumOfAges({name:"Raj", age: 20}, {name:"Jay", age: 16})
console.log(result)
