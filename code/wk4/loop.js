const numbers = [1, 2, 3, 4, 5];
let sum = 0

numbers.forEach(number => {
  console.log(number);
  sum += number
});

console.log('sum = ' + sum)

console.log('------------------')

let nums = [10, 20, 30]
// for of use read array
for (const num of nums){
    console.log(num)
}

console.log('------------------')

// for in use read object
for (const num in nums){
    console.log(num + ' => ' + nums[num])
}

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printDetails() {
        for (let key in this){
            console.log(key + ' => ' + this[key])
        } 
    }
}

let p1 = new Person('John', 20)
p1.printDetails()