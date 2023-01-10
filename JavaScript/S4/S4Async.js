//callback
const addTwo = (a, b) => {
    return a + b
}
const multi = (a, b) => {
    return a * b
}
const divide = (a, b) => {
    return a / b
}
const subTwo = (a,b) => {
    return a - b
}

function calc (a, b, callback) {
    return callback(a, b)
}

console.log(calc(4,5, addTwo))
console.log(calc(5,5, multi))
console.log(calc(6,3, divide))
console.log(calc(6,5, subTwo))