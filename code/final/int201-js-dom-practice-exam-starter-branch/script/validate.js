const specailChar = '$#%^&*()_+!'

const validateUsername = (username) => {
    let haveUpper = false
    let haveNumber = false
    let haveSC = false // Special Char
    if (username.length < 5) return false
    for (const char of username) {
        if (!haveUpper && (char === char.toUpperCase())) haveUpper = true
        else if (!haveNumber && (char >= 0 && char <= 9)) haveNumber = true
        else if (!haveSC && isSpecialChar(char)) haveSC = true
    }
    return haveUpper && haveNumber && !haveSC
};

function isSpecialChar(char) {
    for (const sc of specailChar) {
        if (sc === char) return true
    }
    return false
}

const validateEmail = (email) => {
    const textEnd = `.com`
    let haveAtSymbol = false
    for (const char of email) {
        if (char === '@' && !haveAtSymbol) haveAtSymbol = true
    }
    return haveAtSymbol && email.endsWith('\.com') 
};

const validatePassword = (password) => {
    if (password < 8) return false
    let haveUpper = false
    let haveLower = false
    let haveNumber = false
    let haveSC = false
    for (const char of password) {
        if (!haveSC && isSpecialChar(char)) haveSC = true
        else if (!haveUpper && char === char.toUpperCase()) haveUpper = true
        else if (!haveLower && char === char.toLowerCase()) haveLower = true
        else if (!haveNumber && (char >= 0 && char <= 9)) haveNumber = true
    }
    return haveSC && haveUpper && haveLower && haveNumber
};

export { validateEmail, validatePassword, validateUsername };


