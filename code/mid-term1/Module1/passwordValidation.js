// 65130500066 ภูวเมศฐ์ ปัญจเฉลิมรัตน์
function isPasswordValid(password) {
  if (password == null || password == '' || password == undefined) return false
  let checker = [0, 0, 0, 0] // uppercase, lower, digit, special char
  for (let chr of password){
    if (chr >= 'A' && chr <= 'Z') checker[0] += 1
    else if (chr >= 'a' && chr <= 'z') checker[1] += 1
    else if (parseInt(chr) >= 0 && parseInt(chr) <= 9) checker[2] += 1
    else if (isSpecailChar(chr)) checker[3] += 1
  }
  return ((checker[0] > 0) && (checker[1] > 0) && (checker[2] > 0) && (checker[3] > 0)) && sumPoint(checker) >= 8
}

function sumPoint(array){
  let sum = 0
  for (let point of array) sum += point
  return sum
}

function isSpecailChar(chr){
  let specialChar = `@#$%^&*!`
  for (let spChar of specialChar){
    if (chr == spChar) return true
  }
  return false
}

module.exports = isPasswordValid
