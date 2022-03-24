/*const pessoa1 = {
    
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 19
}
*/
/*
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)
*/

// Criando função que cria objeto para automatizar
/*
function criarPessoa (nome, sobrenome, idade) {
    return { nome,  sobrenome, idade }
}

const pessoa1 = criarPessoa('Luiz', 'Otávio', 19)
const pessoa2 = criarPessoa('Maria', 'Julia', 19)
const pessoa3 = criarPessoa('Ana', 'Julia', 19)

console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(pessoa3.nome)
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 19,

    fala() {
        console.log(`${this.nome} ${this.sobrenome}, a minha idade atual é de ${this.idade} anos`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
