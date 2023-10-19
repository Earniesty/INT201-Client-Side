const nums = [10, 20, 30, 40, 50]
const obj = {
    id: 1001,
    title: 'JS Beginners',
    isbn: 7241326384,
    author: { fullname: 'Jame Smith' }
}

// array Destructuring
const [num11] = nums // 10
const [, num12] = nums // 20
const [num131, num132] = nums // 10, 20
console.log(num11)
console.log(num12)
console.log(num131 + ' < - >' + num132)

// object destructuring
const { author } = obj
const { author: { fullname: authorName } } = obj

console.log(author)
console.log(authorName)

function getFirstName({ displayName, fullName: { firstName: fn } }) {
    return `${displayName} is ${fn}`
}
const students = {
    studentId: 64001,
    displayName: 'jsGuy',
    fullName: {
        firstName: 'Somchai',
        lastName: 'DeeJai'
    }
}
console.log(getFirstName(students))