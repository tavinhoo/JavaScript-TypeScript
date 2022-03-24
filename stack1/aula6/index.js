// ECMAscript 2015 (ES6) JavaScript
/*
var nome = 'Luiz'
console.log(nome)
var nome = 'Otávio'
console.log(nome)
*/

// no var pode-se inicializar quantas variáveis quiser com o mesmo nome
// com let não se pode fazer o mesmo
let nome = 'Luiz'
let nome = 'Otávio'
console.log(nome) //retorna um erro SyntaxError: Identifier 'nome' has 
                                                //already been declared
// Não criar variáveis isoladas
nome = 'Luiz' // não fazer isso