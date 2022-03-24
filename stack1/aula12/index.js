// IEEE 754-2008

let num1 = 0.7 //number
let num2 = 0.1 //number



//console.log(num1.toString() + num2)
//num1 = num1.toString() // se quiser transformar num1 em string
//console.log(num1.toString(2)) // se quiser representar em binário
//console.log(num1.toFixed(4)) // arredondando para duas casas 10.5523543234
//console.log(Number.isInteger(num1)) //saber se o numero é inteiro

/*
let temp = num1 *  '5' // NaN (CONTA INVÁLIDA)
console.log(temp)
console.log(Number.isNaN(temp))
*/

// IMPRECISÃO

/*
console.log(num1)
console.log(num1 + num2)
*/

num1 = ((num1 * 100) + (num2 * 100))  / 100 // 0.8

//num1 = parseFloat(num1.toFixed(10)) // solução 1

console.log(Number.isInteger(num1))

console.log(num1)

//  Somando 0.7 a 3x 0.1 o resultado é 0.9999999999999

// segunda maneira 
num1 += ((num1 * 100) + (num2 * 100))  / 100 // 0.8
num1 += ((num1 * 100) + (num2 * 100))  / 100 // 0.9
num1 += ((num1 * 100) + (num2 * 100))  / 100 // 1.0

let ana = 0.1
let julia = 0.7
console.log(ana + julia) 