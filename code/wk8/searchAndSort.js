// includes()
const fruits = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
console.log(fruits.includes('orange')) // true
console.log(fruits.includes('Orange')) // false
console.log(fruits.includes('orange', 3)) // false

// reverse()
console.log(fruits.reverse()) // [ 'grape', 'banana', 'pineapple', 'orange', 'mango', 'apple' ]
console.log(fruits) // [ 'grape', 'banana', 'pineapple', 'orange', 'mango', 'apple' ]

// sort()
const persons = [ 
    {id: 1, fullName: 'Susan Jo', age: 20},
    {id: 3, fullName: 'Jake Jo', age: 30},
    {id: 2, fullName: 'anna Jo', age: 25},
    {id: 5, fullName: 'brick Jo', age: 65},
    {id: 4, fullName: 'Bird Jo', age: 46}
]

console.log(persons)
// sort by id (ascending order)
console.log(persons.sort((a, b) => a.id - b.id))

// compare by name
console.log(persons.sort((a, b) => {
    if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) return 1
    if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) return -1
    return 0
}))