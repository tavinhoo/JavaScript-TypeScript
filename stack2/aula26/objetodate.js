// objeto date - (datas)
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
//const data = new Date(2019, 3, 20, 15, 14, 27); // a, m, d, h, min, s, ms

/*
const data = new Date('2019-04-20 20:15:59 ');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 é domingo - 6 é sábado 
console.log(data.toString()); 
console.log(Date.now());
*/

//const data = new Date(0 + 1641914884222);
//console.log(data.toString()); 

function zeroaEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
    const dia = zeroaEsquerda(data.getDate());
    const mes = zeroaEsquerda(data.getMonth() + 1);
    const ano = zeroaEsquerda(data.getFullYear());
    const hora = zeroaEsquerda(data.getHours());
    const min = zeroaEsquerda(data.getMinutes());
    const seg = zeroaEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dateBrasil = formatDate(data);
console.log(dateBrasil);