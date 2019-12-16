export const strChecker = (value) => {
    if ((typeof value) == "string" ) {
        return true
    } else {
        return false
    }
}

export const capitalizeLetter = (str) => {
    let newStr = str.toLowerCase()
    let firstLetter = newStr.charAt(0)
    return `${firstLetter.toUpperCase()}${newStr.slice(1, newStr.length)}`
}

export const largerNum = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

export const strJoiner = (str1, str2) => {
    return str1.concat(str2)
}