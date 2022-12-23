console.log('Inicio')

const arrayNumbers = [12, 23, 45, 55, 68, 70, 90]
const arrayAux = []
let count = 0
let functionSetInt = setInterval(() => {
    arrayAux.push(arrayNumbers[count])
    const numbers = document.querySelector('.numbers')
    numbers.innerHTML = arrayAux

    if (arrayAux.length == arrayNumbers.length) {
        clearTimeout(functionSetTimeOut)
        clearInterval(functionSetInt)
    }
    count++
}, 1500)


let functionSetTimeOut = setTimeout(() => {
    console.log('Lógica');
}, 5000)

let isFinish = false
if (isFinish) {
    clearInterval(functionSetInt)
    clearTimeout(functionSetTimeOut)
}

console.log(functionSetInt)
console.log(functionSetTimeOut)

console.log('Fim')

