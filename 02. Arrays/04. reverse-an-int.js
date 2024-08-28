let reverseInt = (num) => {
    let newNum = num.toString().split("").reverse().join("")
    return parseInt(newNum) * Math.sign(num)
}

console.log(reverseInt(-23))