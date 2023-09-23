// node ./mid-term2/Object/Object-Literal/literal.js

const st1 = {
    studentId: 65130500001, 
    firstName: 'Somchai', 
    lastName: 'Sookjai'
}
// Composite Object
const st2 = {
    studentId: 65130500002,
    firstName: 'Somsri',
    lastName: 'Sookjai',
    address: { // <= this is object
        street: '123/456',
        city: 'Bangkok'
    }
}
const st3 = {
    studentId: 65130500003,
    firstName: 'Somchai',
    lastName: 'Sookjai',
    getFullName() {
        // return this.firstName + ' ' + this.lastName
        return `${this.firstName} ${this.lastName}`
    }
}
// How to get keys and values in object
console.log(Object.keys(st1)) // output: [ 'studentId', 'firstName', 'lastName' ]
console.log(Object.values(st2)) // output: [ 65130500002, 'Somsri', 'Sookjai', { street: '123/456', city: 'Bangkok' } ]
console.log(typeof Object.values(st1)) // output: object

console.log(st3.getFullName()) // output: Somchai Sookjai

// Getter and Setter
console.log('Getter: ' + st3.firstName) // output: Somchai
console.log('Getter: ' + st3['lastName']) // output: Sookjai

st3.firstName = 'Sombut'

// new property
st2.email = 'SomSook@gmail.com'

// delete property
delete st2.email
// check property
console.log('email' in st2) // output: false

// check object 
console.log(Object.prototype.isPrototypeOf(st2)) // output: true
console.log(st2.hasOwnProperty('studentId')) // output: true
