let getScoringPass = function (scores) {
    function cuttingPoint(cuttingScore) {
        return scores.filter((score) => score >= cuttingScore)
    }
    return cuttingPoint
}

let fn_cuttinpoint1 = getScoringPass([50, 15, 32, 80, 100])
console.log(fn_cuttinpoint1)
console.log(typeof fn_cuttinpoint1)
// console.log(fn_cuttinpoint1(50))

function counter() {
    let count = 0
    function increment() {
        return ++count
    }
    function decrement() {
        return --count
    }
    function getCount() {
        return count
    }
    return {increment, decrement, getCount}
}

let cn = counter()
console.log(cn)
/*
{
  increment: [Function: increment],
  decrement: [Function: decrement],
  getCount: [Function: getCount]
}
*/
