const data = new Date();
const diaSemana = data.getDay();
const diaVerificado = getDayWeek(diaSemana);


function getDayWeek() {

    let diaVerificado;

    switch (diaSemana) {
        case 0:
            diaVerificado = 'Hoje é domingo';
            return diaVerificado;
        case 1:
            diaVerificado = 'Hoje é segunda-feira';
            return diaVerificado;
        case 2:
            diaVerificado = 'Hoje é terça-feira';
            return diaVerificado;
        case 3:
            diaVerificado = 'Hoje é quarta-feira';
            return diaVerificado;
        case 4:
            diaVerificado = 'Hoje é quinta-feira';
            return diaVerificado;
        case 5:
            diaVerificado = 'Hoje é sexta-feira';
            return diaVerificado;
        case 6:
            diaVerificado = 'Hoje é sabado';
            return diaVerificado;
        default:
            diaVerificado = 'Dia inválido';
            return diaVerificado;
    }
}



/*
let diaVerificado;
// console.log(diaSemana);
/*
switch (diaSemana) {
    case 0:
        diaVerificado = 'Hoje é domingo';
        break;
    case 1:
        diaVerificado = 'Hoje é segunda-feira';
        break;
    case 2:
        diaVerificado = 'Hoje é terça-feira';
        break;
    case 3:
        diaVerificado = 'Hoje é quarta-feira';
        break;
    case 4:
        diaVerificado = 'Hoje é quinta-feira';
        break;
    case 5:
        diaVerificado = 'Hoje é sexta-feira';
        break;
    case 6:
        diaVerificado = 'Hoje é sabado';
        break;
    default:
        diaVerificado = 'Dia inválido';
        break;
}
*/

function getDayWeek() {

    let diaVerificado

    switch (diaSemana) {
        case 0:
            diaVerificado = 'Hoje é domingo';
            return diaVerificado;
        case 1:
            diaVerificado = 'Hoje é segunda-feira';
            return diaVerificado;
        case 2:
            diaVerificado = 'Hoje é terça-feira';
            return diaVerificado;
        case 3:
            diaVerificado = 'Hoje é quarta-feira';
            return diaVerificado;
        case 4:
            diaVerificado = 'Hoje é quinta-feira';
            return diaVerificado;
        case 5:
            diaVerificado = 'Hoje é sexta-feira';
            return diaVerificado;
        case 6:
            diaVerificado = 'Hoje é sabado';
            return diaVerificado;
        default:
            diaVerificado = 'Dia inválido';
            return diaVerificado;
    }
}









/*
if (diaSemana === 0) return 'Hoje é domingo';
if (diaSemana === 1) return 'Hoje é segunda-feira';
if (diaSemana === 2) return 'Hoje é terça-feira';
if (diaSemana === 3) return 'Hoje é quarta-feira';
if (diaSemana === 4) return 'Hoje é quinta-feira';
if (diaSemana === 5) return 'Hoje é sexta-feira';
if (diaSemana === 6) return 'Hoje é sábado';
*/