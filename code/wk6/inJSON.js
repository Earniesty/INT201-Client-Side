const obj1 = {}
const obj2 = {id: 1}

if (obj1) console.log('obj1 === {}') 
else console.log('object obj1 is not empty')

console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))

function isEmpty(obj) {
    return JSON.stringify(obj) === '{}'
}

console.log(isEmpty(obj1)) // true
console.log(isEmpty(obj2)) // false

const obj3 = obj2
const obj4 = { ...obj2 } // copy content from obj2 to obj4, not reference

console.log(obj3 === obj4) // false