function sendFunction(n1, n2, fn){
    return fn(n1, n2);
}

function positive(n1, n2){
    return n1 + n2;
}
console.log(sendFunction(1, 2, positive));

let fact = function factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}
console.log(fact(5))

let concat = (str1, str2) => {
    return str1 + ' ' + str2
}

console.log(concat('Hello', 'World'))
console.log(`type of concat('Hello', 'World') is ${typeof concat('Hello', 'World')}`)

function said(){
    return 'Goodbye'
}
function saySomething(){
    return said
}
let word = saySomething()
console.log(word) // [Function: said]
console.log(word()) // Goodbye

// object parameter passing
function update(a){
    a[0] = 888
}
const n = [1,2,3]
update(n)
console.log(n)