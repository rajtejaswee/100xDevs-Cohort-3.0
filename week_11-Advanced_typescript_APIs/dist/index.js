"use strict";
function sumOfAges(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAges({ name: "Raj", age: 20 }, { name: "Jay", age: 16 });
console.log(result);
