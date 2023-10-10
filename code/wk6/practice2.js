class Person {
    constructor (firstName, lastName, dateOfBirth) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
    }
    getFullName() {
        return `${this.lastName}, ${this.firstName}`
    }
    getAge() {
        // return new Date(Date.now()).getFullYear() - this.dateOfBirth.getFullYear()
        const current = Date.now() // return to milliseconds
        const birth = this.dateOfBirth.getTime() // return to milliseconds
        // console.log(current, birth)
        const diffMilli = current - birth
        const diffDate = new Date(diffMilli)
        return diffDate.getFullYear() - 1970
    }
    isEqual(anotherPerson) {
        return this.getFullName().toLowerCase() === anotherPerson.getFullName().toLowerCase()
    }
    toString() {
        return `Name: ${this.getFullName()}, Age: ${this.getAge()}`
    }
}

const p1 = new Person('Somchai', 'Sookjai', new Date(1999, 0, 1))
const p2 = new Person('Somsri', 'Sookjai', new Date(1999, 0, 1))
const p3 = new Person('Somchai', 'Sookjai', new Date(1999, 0, 1))
console.log(p1.getFullName())
console.log(p1.getAge())
console.log(p1.isEqual(p3) ? 'Equal' : 'Not equal')
console.log(p1.isEqual(p2) ? 'Equal' : 'Not equal')
console.log(p1.toString())