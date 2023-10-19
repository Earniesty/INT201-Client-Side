// arguments 
// function ops(n1, n2, n3) {
//     // arguments[0] = n1
//     // arguments[1] = n2
//     // arguments[2] = n3
//     console.log(arguments.length) // 2
//     arguments[0] = 555
//     console.log(n1) // 555
//     console.log(n3) // undefined
// }

// ops(5, true)

// function ops(n1, n2, ...n3) {
//     //formal parameters
//     console.log('arguments length:', arguments.length)
//     for (const argu of arguments) {
//         console.log(argu)
//     }
//     console.log('n3:', n3) //n3: [ 'xyz', 10.5, 100 ]
// }

// ops(1, true, 'xyz', 10.5, 100) //actual parameters, arguments object stores collections at actual parameters

// function sum(...nums) {
//     return nums.reduce((total, current) => total + current, 0)
// }

// console.log(sum(1, 2, 3))
// console.log(sum(1, 2, 3, 4, 5))
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

function ops(n1 = 'F', n2 = false, n3 = 'unknown') {
    return {n1, n2, n3}
}

console.log(ops()) // { n1: 'F', n2: false, n3: 'unknown' }
console.log(ops('A')) // { n1: 'A', n2: false, n3: 'unknown' }
console.log(ops('A', true)) // { n1: 'A', n2: true, n3: 'unknown' }
console.log(ops('A', true, 'Somchai')) // { n1: 'A', n2: true, n3: 'Somchai' }

console.log(ops(undefined, undefined, 'Somchai')) // { n1: 'F', n2: false, n3: 'Somchai' }
console.log(ops(null, null, 'Somchai')) // { n1: null, n2: null, n3: 'Somchai' }
console.log(ops('A', undefined, 'Somchai')) // { n1: 'F', n2: false, n3: 'Somchai' }