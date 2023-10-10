// 1. Hello, World! Write a JavaScript program that prints "Hello, World!" to the console.
console.log('1. ------------------')
console.log('Hello, World!')

// 2. Variables and Data Types Declare a variable called age and assign your age to it. Print the value to the console.
console.log('2. ------------------')
let age = 20
console.log(age)

// 3. Math Operations Write a program that calculates and prints the sum, difference, product, and quotient of two numbers.
console.log('3. ------------------')
let x = 10, y = 5
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

// 4. String Manipulation Create a variable name with your name and display a message like "Hello, [Your Name]!" using string concatenation.
console.log('4. ------------------')
let name = 'Fame'
console.log('Hello, ' + name + '!')

// 5. Arrays Create an array of your favorite fruits. Print each fruit's name to the console using a loop.
console.log('5. ------------------')
let fruits = ['apple', 'banana', 'orange']
console.log('for of ->')
for (const fruit of fruits){
    console.log(fruit)
}
console.log('for in ->')
for (const index in fruits){
    console.log(fruits[index])
}
console.log('forEach ->')
fruits.forEach(fruit => {
    console.log(fruit)
})

// 6. Conditional Statements Write a program that checks if a number is even or odd and prints the result.
console.log('6. ------------------')
let number = Math.floor(Math.random() * 20) + 1
if (number % 2 == 0) console.log(number + ' is even')
else console.log(number + ' is odd')

// 7. Functions Create a function that takes two numbers as parameters and returns their sum.
console.log('7. ------------------')
function sum(x, y){
    return x + y
}
console.log(sum(10, 20))

// 8. Arrays and Loops Write a program to find the largest number in an array.
console.log('8. ------------------')
let nums = []
function randomToArray(arr, amount){
    for (let i = 0; i < amount; i++){
        arr.push(Math.floor(Math.random() * 10) + 1)
    }
}
randomToArray(nums, 5)
console.log(nums)
let maxNum = nums[0]
for (const num of nums){
    if (num > maxNum) maxNum = num
}
console.log('Maximum number in array is ' + maxNum)

// 9. Objects Create an object representing a car with properties like make, model, and year. Print the car's details.
console.log('9. ------------------')
let car = {
    make: 'Toyota',
    model: 'Biger',
    year: 2024
}
console.log(car)

// 10. Conditional Statements Write a program that checks if you are eligible to vote based on your age.
console.log('10. ------------------')
if (age > 18) console.log('You are eligible to vote')
else console.log('You are not eligible to vote')

// 11. Functions Create a function that calculates the factorial of a given number.
console.log('11. ------------------')
function factorial(num){
    if (num <= 1) return 1
    return num * factorial(num - 1)
}
console.log(factorial(5))

// 12. Arrays and Methods Create an array of numbers and use a method to find the sum of all the elements.
console.log('12. ------------------')
let sumNums = nums.reduce((sum, num) => sum + num, 0)
console.log(sumNums)

// 13. Objects and Methods Create an object representing a person with properties like name, age, and a method to greet.
console.log('13. ------------------')
let person = {
    name: 'Fame',
    age: 20,
    greet: function(){
        console.log('Hello, ' + this.name)
    }
}
person.greet()

// 14. Conditional Statements Write a program to determine if a number is positive, negative, or zero.
console.log('14. ------------------')
let randNum = Math.floor(Math.random() * 11) - 5
if (randNum > 0) console.log(randNum + ' is positive')
else if (randNum < 0) console.log(randNum + ' is negative')
else console.log(randNum + ' is zero')

// 15. Loops Write a program that prints numbers from 1 to 10 using a loop.
console.log('15. ------------------')
for (let i = 1; i <= 10; i++){
    console.log(i)
}

// 16. Functions Create a function that converts Fahrenheit to Celsius and vice versa.  
console.log('16. ------------------')
function temperatureConverter(tempeature, unit){
    if (unit == 'C') return (tempeature * 9/5) + 32
    else if (unit == 'F') return (tempeature - 32) * 5/9
    else return 'Invalid unit'
}
console.log(temperatureConverter(25, 'C'))
console.log(temperatureConverter(50, 'F'))

// 17. Arrays and Methods Create an array of words and use a method to find the longest word.
console.log('17. ------------------')
let words = [...fruits, 'pineapple', 'watermelon']
let longestWord = words.reduce((longest, word) => word.length > longest.length ? word : longest, words[0])
// let longestWord = words[0]
// for (const word of words){
//     if (word.length > longestWord.length) longestWord = word
// }
console.log('Longest word is ' + longestWord)

// 18. Objects and Methods Create an object representing a book with properties like title and author. Add a method to display the book's information.
console.log('18. ------------------')
let book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    displayInfo: function(){
        console.log('Title: ' + this.title + ', Author: ' + this.author)
    }
}
book.displayInfo()

// 19. Conditional Statements Write a program to check if a year is a leap year.
console.log('19. ------------------')
let year = 2000
// if % 4 == 0 is leap year
// % 100 == 0 is not leap year
// but % 400 == 0 is leap year
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) console.log(year + ' is leap year')
else console.log(year + ' is not leap year')

// 20. Loops Write a program that generates a multiplication table for a given number.
console.log('20. ------------------')
let mom = 4
for (let i = 1; i <= 12; i++){
    console.log(mom + ' * ' + i + ' = ' + mom * i)
}