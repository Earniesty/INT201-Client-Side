    let x = 1
console.log(x + ' ' + typeof x)
x = 'A'
console.log(x + ' ' + typeof x)

// create Array use []
let nums = [1, 3, 5, 7, 9]
console.log(typeof nums)

// create Object use {}
const obj = {
    id: 1,
    title: 'JS'
}
console.log(typeof obj)

console.log('------------------')
console.log(nums)
console.log(obj)
obj.id = 2
console.log(obj)

console.log('------------------')
// create new array
const ids = [1, 2, 3, 4, 5]
//add new ids
ids[ids.length] = 7
console.log(ids)

// ----------------------
let p = 2, q = 3, r = null, j = 'B'
console.log(p + q)
console.log(p + j)
console.log(p + r)
console.log(p + r + j)
console.log(p + j + r)
console.log(j + p + r)