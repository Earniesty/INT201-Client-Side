
// x is global scope
let x = 1
console.log(x + ' ' + typeof x)
{
    // this x is block scope
    let x = 5
    console.log(x + ' ' + typeof x)
}
console.log(x + ' ' + typeof x)
x = 10
console.log(x + ' ' + typeof x)
if (0){
    let x = 555
    console.log(x + ' ' + typeof x)
} else {let x = 555; console.log(x + ' ' + typeof x)}

console.log(x)

function doSomething(){
    let x = 'A'
    console.log(x + ' ' + typeof x)
}

doSomething()
console.log(x + ' ' + typeof x)

// ----------------------

let conv1 = 10 + ' rooms' // 10 rooms
let conv2 = '4' * 5 // 20
let conv3 = 'a' - 2 // NaN (Not a Number)
let conv4 = !'a' // false : default value of string in boolean is true
console.log(!conv4)
// convert conv4 to number
console.log(Number(!conv4))

// optional chaining
let values
console.log(values[0])
console.log(values?.length)