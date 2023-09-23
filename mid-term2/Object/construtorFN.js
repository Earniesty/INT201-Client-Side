// node ./mid-term2/Object/Constructor-functions/construtorFN.js

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

console.log(Person.prototype.isPrototypeOf(p1)) // return true