// continue array and working function
const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'DAVID', score: 79 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 },
    { name: 'david', score: 85 }
]
// 1.1 find student call name "david" and score more than 80
let findDavid = studentScores.find(
    (std) => std.name.toLowerCase() === 'david' && std.score > 80
)
console.log(findDavid)

// 1.2 find student call all name "david" and score more than 80
let yeahThatDavid = studentScores.filter(
    (std) => std.name.toLowerCase() === 'david' && std.score > 80
)
console.log(yeahThatDavid)

const fruits = ['apple', 'mango', 'orange', 'pineapple']
const lowels = ['a', 'e', 'i', 'o', 'u']
let startWithVowel = fruits.every((fruit) => {
    // let startWithVowel = fruits.some(fruit => {
    for (let lowel of lowels) {
        if (fruit[0].toLowerCase() === lowel) return true
    }
    return false
})
console.log(startWithVowel)

// reduce()
const nums = [5, 4, 100, -1, 0, 2, 19]
const total = nums.reduce((total, current) => total + current)
console.log(total)

// const fruits = ['apple', 'mango', 'orange', 'pineapple']
const resultFruit = fruits.reduce(
    (firstChar, fruit) => firstChar.concat(fruit.charAt(0)),
    ''
)
console.log(resultFruit)

const nums2 = [1, 2, 3, 4, 5]
const multiNums2 = nums2.reduce((result, currentNum) => result * currentNum, 1)
console.log(multiNums2)

const sellProducts = [
    { id: 1, price: 100, sell: 5 },
    { id: 2, price: 50, sell: 2 },
    { id: 3, price: 25, sell: 10 }
]
const totalPrice = sellProducts.reduce(
    (total, product) => total + product.price * product.sell,
    0
)
console.log(totalPrice)


// subarray
// const fruits = ['apple', 'mango', 'orange', 'pineapple']
fruits.push('banana', 'grape')
console.log(fruits) // [ 'apple', 'mango', 'orange', 'pineapple', 'banana', 'grape' ]

// remove
const removeElement = fruits.splice(1, 2)
console.log(removeElement) // [ 'mango', 'orange' ]
console.log(fruits) // [ 'apple', 'pineapple', 'banana', 'grape' ]

// add splice
const addElement = fruits.splice(2, 0, 'mango', 'rambutant')
console.log(addElement) // []
console.log(fruits) // [ 'apple', 'pineapple', 'mango', 'rambutant', 'banana', 'grape' ]

//splice with replace
const replaceFruit = fruits.splice(2, 1, 'mangosteen')
console.log(replaceFruit) // [ 'mango' ]
console.log(fruits) // [ 'apple', 'pineapple', 'mangosteen', 'rambutant', 'banana', 'grape' ]

// sort 
const animals = ['ant', 'dogs', 'cats', 'Bird']
console.log(animals.sort()) // [ 'Bird', 'ant', 'cats', 'dogs' ]

const nums3 = [5, 1, 10, 1000, 2, 3, 50]
console.log(nums3.sort((a, b) => a - b))
console.log(nums3.sort((a, b) => b - a))

const persons = [
    {id: 1, fullName: 'Susan Jo'},
    {id: 3, fullName: 'Jake Jo'},
    {id: 2, fullName: 'anna Jo'}
]

// sort by id
console.log(persons.sort((a, b) => a.id - b.id))

// sort by name
console.log(persons.sort((a, b) => {
    if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) return 1
    if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) return -1
    return 0
}))