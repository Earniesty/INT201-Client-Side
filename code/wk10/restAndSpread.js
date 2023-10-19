function sum(num1, num2, num3) {
    return num1 + num2 + num3
}

const nums = [10, 2, 43]
console.log(sum(nums)) // 10,2,43undefinedundefined
console.log(sum(...nums)) // 55
console.log(nums + undefined) // 10,2,43undefined