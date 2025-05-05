// Age based function

function legal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

let checkAge = legal(10);
console.log(checkAge);
