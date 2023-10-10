// array 
const x = [1, true, 'abc']
console.log(x)
console.log(`size of array x is ${x.length}`)
console.log(`first element of array x is ${x[0]} and type is ${typeof x[0]}`)
console.log(`second element of array x is ${x[1]} and type is ${typeof x[1]}`)
console.log(`last element of array x is ${x[x.length - 1]} and type is ${typeof x[x.length - 1]}`)
console.log('------------------')

const y = []
console.log(`size of array y is ${y.length} and type is ${typeof y}`)
if (y.length === 0) console.log('y is empty')
else console.log('y is not empty')
console.log('------------------')

let nums = [10, 20, 30]
console.log(nums)
nums.push(40)
console.log(nums)
console.log('------------------')

const students = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'Mary'},
    {id: 4, name: 'Adam'}
]
console.log(students)
console.log(`size of array students is ${students.length}`)
console.log(`first element of array students is [id:${students[0].id}, name:${students[0].name}]`)
console.log('------------------')

// spread operator
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [...a, ...b]
console.log(c) // [ 1, 2, 3, 4, 5, 6 ]
const str = 'hello world'
const chars = [...str]
console.log(chars) // [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]

// array constructor
let d = new Array()
const dd = new Array(1, 2, 3)
console.log(d) // []
console.log(dd) // [ 1, 2, 3 ]
// array constructor with size
const e = new Array(5)
console.log(e) // [ <5 empty items> ]
// array.of
const f = Array.of(1, 2, 3)
console.log(f) // [ 1, 2, 3 ]
const g = Array.of(f)
console.log(g) // [ [ 1, 2, 3 ] ]

// array.from (like spread operator)
const h = Array.from('hello')
console.log(h) // [ 'h', 'e', 'l', 'l', 'o' ]
let i = [1, 2, 3]
let j = Array.from(i)
console.log(j) // [ 1, 2, 3 ]
console.log(i === j) // false (check memory address)
console.log(i == j) // false (check memory address)

// array destructuring
const k = [10, 20, 30]
const [l, m, n] = k
console.log(l) // 10
console.log(m) // 20
console.log(n) // 30

// array destructuring with rest operator
const o = [10, 20, 30, 40, 50]
const [p, ...q] = o
console.log(p) // 10
console.log(q) // [ 20, 30, 40, 50 ]

// array destructuring with default value
const r = [10, 20, 30]
const [s, t, u, v = 40] = r
console.log(s) // 10
console.log(t) // 20
console.log(u) // 30
console.log(v) // 40

const coordinates = [10, 20, 30, 40];

const [xx, , ...z] = coordinates;

console.log(xx); // Outputs: 10
console.log(z); 
