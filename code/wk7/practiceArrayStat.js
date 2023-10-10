function findInfoFromArray(myArr) {
    if ( myArr === null || myArr === undefined || myArr.length === 0 || !Array.isArray(myArr)) return {}
    console.log(typeof myArr)
    let max = myArr[0]
    let min = myArr[0]
    let sum = 0
    for (let num of myArr) {
        if (num > max) max = num
        if (num < min) min = num
        sum += num
    }
    let avg = sum / myArr.length

    return {min: min, max: max, sum: sum, avg:avg}
}

const array = [1, 2, 3, 4, 5]
console.log(findInfoFromArray(array))
console.log(findInfoFromArray(1))
console.log(findInfoFromArray(null))