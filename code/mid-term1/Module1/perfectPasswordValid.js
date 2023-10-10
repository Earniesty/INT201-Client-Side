function isPasswordValid(password) {
  if (!password || password.length < 8) return false
  let checker = [false, false, false, false] // uppercase, lower, digit, special char
  for (let chr of password){
    if (chr >= 'A' && chr <= 'Z') checker[0] = true
    else if (chr >= 'a' && chr <= 'z') checker[1] = true
    else if (parseInt(chr) >= 0 && parseInt(chr) <= 9) checker[2] = true
    else if (isSpecailChar(chr)) checker[3] = true
  }
  return (checker[0] && checker[1] && checker[2] && checker[3])
}

function isSpecailChar(chr){
  let specialChar = `@#$%^&*!`
  for (let spChar of specialChar){
    if (chr == spChar) return true
  }
  return false
}
  
module.exports = isPasswordValid