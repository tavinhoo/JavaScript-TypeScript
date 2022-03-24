    /*
    Luiz Otávio Miranda tem 30 anos,
    pesa 84kg tem 1.8 de altura e seu IMC é de 25.92
    Luiz Otávio nasceu em 2002
    */

const nome = 'Luiz Otávio'
const sobrenome = 'Faria'
const idade = 19
const peso = 70
const altura = 1.8

let imc = peso / (Math.pow(altura, 2.0))
let anoAtual = 2021
let anoNascimento = anoAtual - idade
console.log(anoNascimento)

console.log(nome, sobrenome, 'tem' , idade, 'anos, pesa' , peso, 'kg tem' ,altura, 'de altura e seu IMC é de', imc)
console.log(nome, 'nasceu em', anoNascimento)

// + concatenação + 
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg tem ' + altura + ' de altura e seu IMC é de ' + imc)
console.log(nome + ' nasceu em ' + anoNascimento)

// TEMPLATE STRINGS
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem altura de ${altura} e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
