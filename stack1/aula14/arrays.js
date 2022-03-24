// Strings são indexadas, cada letra tem sua casa (numeracao)
const nome = 'Luiz Otávio'
console.log(nome[0])
//                 0       1        2
const alunos = ['Luiz', 'Maria', 'joão']
/*
console.log(alunos)
console.log(alunos[2])
console.log(alunos[0])
*/

//Editar array: 
alunos[0] = 'Otávio'
console.log(alunos)

//adicionar elemento ao arrey: 
alunos[3] = 'Luiza'
console.log(alunos)

// Tamanho do array
console.log(alunos.length)
alunos[alunos.length] = 'Ana'
alunos[alunos.length] = 'Julia'
alunos[alunos.length] = 'Tavinho'
console.log(alunos)

/* Função para adicionar ao array */

alunos.push('Roberto') //adiciona no fim
alunos.push('Roberta')
alunos.push('Fabio')
console.log(alunos)

// Adicionar elemento na posição 0

alunos.unshift('Luiza') // adiciona no primeiro indice
console.log(alunos)

// Remover elementos no fim
alunos.pop()
console.log(alunos)

/* Salvar elemento removido, em uma variável */
const removido = alunos.pop() // .shift()(removido do começo) também é semelhante
console.log(removido)
console.log(alunos)

// Apagar elemento a partir do indice

delete alunos[1]
console.log(alunos[1])

// Acessar indices que nao existem
console.log(alunos[50])

// Fatiando array
console.log(alunos.slice(0, -1))

// typeof do array
console.log(typeof alunos)
console.log(alunos instanceof Array)


let nominho = ['Luiz', 'Otavio', 'Faria']
console.log(nominho[0].lastIndexOf('z'))