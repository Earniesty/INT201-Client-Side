// node ./mid-term2/Object/objectCreateAndInher.js

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

const pp1 = Object.create(p1)
console.log(pp1.getAge())
console.log(Object.prototype.isPrototypeOf(pp1))
console.log(Person.prototype.isPrototypeOf(pp1))
pp1.hobby = ['play game', 'read book']
console.log(pp1)
console.log(Object.keys(pp1))
console.log(Object.values(pp1))
console.log(Object.entries(pp1))