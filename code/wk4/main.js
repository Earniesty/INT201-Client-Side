let someone = ''
let who
console.log(typeof someone)
if (someone) who = 'member'
else who = 'guest'

// if-else expression
who = someone ? 'member' : 'guest'
console.log(who)

// Obitional Chaining
const member = {
    name: 'Mike',
    age: 30,
}
console.log(member.name)
console.log(member.address)

// Nullish Coalescing Operator
const name = member.name ?? 'Guest'
console.log(name)

let strNum = '130.75'
let floatNum = parseFloat(strNum)
let intNum = parseInt(strNum)
console.log(floatNum)
console.log(intNum)

let str1 = 'Apple'
let str2 = 'banana'
console.log(str1.includes('app'))
console.log(str1.includes('App'))

const a = [1, 2, 3] // a = memory address
const b = [1, 2, 3] // b = memory address
console.log(a === b) // memory address of a === memory address of b // false

const c = b
console.log(b === c) // memory address of b === memory address of c // true
c[0] = 'A'
console.log(b) // [ 'A', 2, 3 ]
console.log(c) // [ 'A', 2, 3 ]

a[0] = 555
console.log(a) // [ 555, 2, 3 ]
console.log(b) // [ 'A', 2, 3 ]
console.log(c) // [ 'A', 2, 3 ]

// object data types in an object
const x = {
    id: 1,
    title: 'JS'
}
const y = {
    id: 1,
    title: 'JS'
}
const z = y
console.log(x === y) // false
console.log(y === z) // true

y.id = 888
console.log(x) // { id: 1, title: 'JS' }
console.log(y) // { id: 888, title: 'JS' }
console.log(z) // { id: 888, title: 'JS' }

// primitive
let m = 5
let n = 10
let o = n //n assign 10 to o then o stores 10

m = 999
o = 1000
console.log(o === n)
console.log(m)
console.log(n)
console.log(o)
