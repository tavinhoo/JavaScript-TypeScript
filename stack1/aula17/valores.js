                   
                   
            // VALORES PRIMITIVOS E VALORES REFERÊNCIA \\

/*
Primitivos (VALORES IMUTÁVEIS)- |string, number,      | 
                                |boolean, undefined,  |
                                |null (bigint, symbol)| 

                                são valores copiados
*/       
/*      
          //0123        
let nome = 'Luiz'
nome[0] = 'R'  // NADA ACONTECE PQ A STRING É IMUTAVEL
console.log(nome)

let a = 'A'
let b = a  //Cópia
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)
*/

// REFERENCIA (MUTAVEL) - array, object, function - Passados por referência 
/*
let a = [1, 2, 3]
let b = [...a]  // B aponta para o mesmo objeto na memoria
let c = b

console.log(a, b)

a.push(4)
console.log(a)
console.log(a, b)

b.pop()
console.log(b)
console.log(a, b)

a.push('Luis')
console.log(c)
*/


// OBJETOS


            // SPREAD É QUANDO VOCE QUER QUE UM RECEBA O VALOR DO OUTRO
            // MAS QUE MUDANÇAS EM UM NAO AFETE O OUTRO {...a}
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

const b = {...a}

a.nome = 'João'

console.log(a)
console.log(b)