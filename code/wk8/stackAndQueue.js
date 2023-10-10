// stack and queue methods (push, pop, shift, unshift)
const fruits = ['apple', 'mango', 'orange', 'pineapple']
// push()
fruits.push('banana', 'grape')
console.log(fruits) // [ 'apple', 'mango', 'orange', 'pineapple', 'banana', 'grape' ]

// pop()
const popFruit = fruits.pop()
console.log(popFruit) // grape
console.log(fruits) // [ 'apple', 'mango', 'orange', 'pineapple', 'banana' ]

// shift()
const shiftFruit = fruits.shift()
console.log(shiftFruit) // apple
console.log(fruits) // [ 'mango', 'orange', 'pineapple', 'banana' ]

// unshift()
fruits.unshift('apple')
console.log(fruits) // [ 'apple', 'mango', 'orange', 'pineapple', 'banana' ]

// slice()
console.log(fruits.slice(1)) // [ 'mango', 'orange', 'pineapple', 'banana' ]
console.log(fruits.slice(1, 3)) // [ 'mango', 'orange' ]
console.log(fruits.slice(-2)) // [ 'pineapple', 'banana' ]
console.log(fruits.slice(-3, -1)) // [ 'orange', 'pineapple' ]
console.log(fruits.slice(-3, -2)) // [ 'orange' ]

// fill()
const nums = [1, 2, 3, 4, 5]
console.log(nums.fill(0)) // [ 0, 0, 0, 0, 0 ]
console.log(nums.fill(1, 1)) // [ 0, 1, 1, 1, 1 ]
console.log(nums.fill(2, 2, 4)) // [ 0, 1, 2, 2, 1 ]