// básico sobre fuções 

//Funções executam ações



function saudacao(nome) {
    return `Bom dia ${nome}!`
}

//Salvando o que a variável retorna 

const variavel = saudacao('Luiz')
console.log(variavel)

/*
    Uso simples
saudacao('Maria')
saudacao('Felipe')
*/

// Escopo da função - Impossivel acessar a constante variavel fora do escopo
function soma(x, y) { 
    const resultado = x + y
    return resultado
}
/*
const resultado = soma(2, 2)
console.log(resultado)
*/

console.log(soma(2, 2))
console.log(soma(234234, 4657))
console.log(soma(546245, 7456745))
console.log(soma('Luiz', ' Otávio'))
console.log(soma(123.2141, 213.423))


const resultado = soma() //function soma(x = 1, y = 1) resultado = 2
console.log(soma()) // NaN

// Mais modos de criar funções (função anonima)

const raiz = function(n) {
    return n ** 0.5
}

console.log(raiz(9))
console.log(raiz(3324))
console.log(raiz(16))

// MÉTODOS MAIS ATUAL (MODERNO)

const expoente10 = (n) => {
    return n ** 10
}

console.log(expoente10(11230))
 
// const expoente = n => n ** 10 | se tiver um só parametro (ARROW FUNCTION)