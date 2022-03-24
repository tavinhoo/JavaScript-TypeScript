//Tipos de dados primitivos

const nome = 'Luiz' //string
const nome1 = "Luiz" //string
const nome2 = `Luiz` //string

const num = 10 //number
const num1 = 10.52 //number

let nomeAlunos // undefined = não aponta para lugar nenhum na memória
const sobrenomeAluno = null // nulo - > não aponta para lugar nenhum na memória

const boolean = false // Boolean = true, false (lógico)

console.log(typeof sobrenomeAluno, sobrenomeAluno) // null = object (bug)

let a = 2
const b = a
console.log(a, b)

a = 3
console.log(a, b)

// String, number, undefined, null, boolean, symbol (em sequência)