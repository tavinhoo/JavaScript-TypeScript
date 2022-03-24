// ? :

const userScore = 9199;

/*
if (userScore >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuario normal')
}
*/

// utilizando operação ternária

const userNivel = (userScore >= 1000) ? 'VIP user' : 'comum user';
console.log(userNivel);