function echo(msg) {
    return `hello, ${msg}`
}

function sum(...n) {
    let total = 0
    for (const num of n) total += num
    return total
}

const maxValue = 100

// Common JS
// module.exports = {echo, sum, maxValue}

// ES Module
// export {echo, sum, maxValue}
// default export ES
export {sum as default, echo, maxValue}