/* 
   Entre 0 - 11 - Bom dia
   Entre 12 - 17 - Boa tarde
   Entre 18 - 23 - Boa noite 
*/

// If pode ser usado sozinho
// else if nao pode ser usado sozinho
// posso ter varios else ifs em condição
// só posso ter um else na checagem
// podemos usar condições sem else if 


const hora = 21

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!') 
} else if (hora > 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Erro')
}


const grana = false

if (grana) {
    console.log('Vou sair de casa')
} else {
    console.log('Não vou sair de casa!')
}