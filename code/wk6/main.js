// 1. Create object with object literal
const st1 = {
    studentId: 65130500001, 
    firstName: 'Somchai', 
    lastName: 'Sookjai'
}
console.log(typeof st1)
console.log(st1)
console.log(Object.keys(st1))
console.log(Object.values(st1))

// 2. Composite object: add address property
const st2 = {
    studentId: 65130500002,
    firstName: 'Somsri',
    lastName: 'Sookjai',
    address: {
        street: '123/456',
        city: 'Bangkok'
    }
}
console.log(typeof st2)
console.log(st2)

// 3. property value can store function
const st3 = {
    studentId: 65130500003,
    firstName: 'Somchai',
    lastName: 'Sookjai',
    // getFullName() { return `${this.firstName} ${this.lastName}` }
    getFullName: function() {
        // return this.firstName + ' ' + this.lastName
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(st3.getFullName())

// 4. getValue
console.log(st2['studentId'])
console.log(st2.address)

// 5. add property
st2.email = 'SomSook@gmail.com'
console.log(st2)

// 6. delete property
delete st2.email
console.log(st2)

// 7. check Object
console.log(Object.prototype.isPrototypeOf(st2))
console.log(st2.hasOwnProperty('studentId'))

// Constructor function
function Person(name, age) {
    this.name = name
    this.age = age
    this.getAge = function() {
        return this.age
    }
    this.getName = () => {
        return this.name
    }
}

const p1 = new Person('Somchai', 20)
const p2 = new Person('Somsri', 21)
console.log(p1.getAge())
console.log(p1.getName())
console.log(p2.getAge() + ' ' + p2.getName())

console.log(Person.prototype.isPrototypeOf(p1))

// ES6 Class
class Circle {
    constructor (radius) {
        this.radius = radius
    }
    // shared method
    area() {
        return Math.PI * Math.pow(this.getRadius(), 2)
    }
    getRadius() {
        return this.radius
    }
}

const c1 = new Circle(10)
console.log(c1.area())
const c2 = new Circle(20)
console.log(c2.area())
console.log('c1 and c2 are the same class: ' + ((c1 instanceof Circle) && (c2 instanceof Circle)))
console.log('area different between c1 and c2: ' + Math.abs(c1.area() - c2.area()))

// Inheritance
const pp1 = Object.create(p1)
console.log(pp1.getAge())
console.log(Object.prototype.isPrototypeOf(pp1))
console.log(Person.prototype.isPrototypeOf(pp1))
pp1.hobby = ['play game', 'read book']
console.log(pp1)
console.log(Object.keys(pp1))
console.log(Object.values(pp1))
console.log(Object.entries(pp1))
console.log(typeof Object.entries(st2))
console.log(st2)

const st4 = st1
function compareStudent(st1, st2) {
    return st1.studentId == st2.studentId
}

console.log(compareStudent(st1, st2))
console.log(compareStudent(st1, st4))
