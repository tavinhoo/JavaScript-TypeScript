// Mais sobre STRINGS

// Strings indexadas
// Ferramentas para usar com strings(disponibilizadas pelo JS)
            //   01234567
let umaString = "O rato roeu a roupa do rei de Roma." 

console.log(umaString[1])
console.log(umaString.charAt(3))
console.log(umaString.concat(' ', 'em', ' ', 'um', ' livro'))
console.log(umaString + ' em ' + 'um ' + 'livro')
console.log(`${umaString} em um livro`)

//Encontrar indices no texto

console.log(umaString.indexOf('texto'))
console.log(umaString.indexOf('Um', 3)) // não existe 'Um' depois do indice 3
console.log(umaString.indexOf('o', 3)) // não existe 'Um' depois do indice 3
console.log(umaString.lastIndexOf('m', 7)) // começa de trás pra frente
console.log(umaString.match(/[a-z]/g)) // Expressoes regulares
console.log(umaString.replace(/r/g, '#'))
console.log(umaString.length)
console.log(umaString.slice(2, 6))
console.log(umaString.slice(-5, -1)) // 32 - 3
console.log(umaString.slice(32))
console.log(umaString.substring(umaString.length -5))
console.log(umaString.split(' '))
console.log(umaString.split(' ', 2)) // aconteça duas vezes
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())