// Alert, confirm e prompt()
/*
alert('Seja bem vindo!') // retorna undefined 
confirm('Deseja começar agora? ') // retorna true or false
prompt('Digite o seu nome: ') // retorna String
*/

/*
let num1 = prompt('Digite um numero: ')
let num2 = prompt('Digite um segundo numero: ')

num1 = parseInt(num1)
num2 = parseInt(num2)

console.log(num1 + num2)
*/

// EXERCÍCIO


let numero1 = prompt('Digite o primeiro número: ')
let numero2 = prompt('Digite o segundo número: ')

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

const solucao = numero1 + numero2 

alert('o resultado é: ' + solucao)


// CÓDIGO DO PROFESSOR: 

let num1 = prompt('Digite um numero: ')
let num2 = prompt('Digite outro numero: ')

num1 = Number(num1)
num2 = Number(num2)

alert(`O resultado da sua conta foi: ${num1 + num2}`)