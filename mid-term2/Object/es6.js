// node ./mid-term2/Object/es6.js

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