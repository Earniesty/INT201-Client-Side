function validate() {
    const specialChars = '!@#$%^&*()_+'
    function validateUsername(username) {
        if (username.length < 5) return false
        let haveUpper = false
        let haveNumber = false
        let haveSC = false
        if (username.length < 5) return false
        for (const char of username) {
            if (!haveUpper && (char === char.toUpperCase())) haveUpper = true
            else if (!haveNumber && (char >= 0 && char <= 9)) haveNumber = true
            else if (!haveSC && isSpecialChar(char)) haveSC = true
        }
        return haveUpper && haveNumber && !haveSC
    }

    function isSpecialChar(char) {
        for (const sc of specialChars) {
            if (sc === char) return true
        }
        return false
    }

    function validatePassword(password) {
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
    }

    return {
        validateUsername,
        validatePassword
    }
}

export { validate }