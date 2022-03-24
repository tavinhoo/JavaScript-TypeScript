// capturando os dados sobre a data

function myScope() {

    const today = new Date();

    function whatDayIsToday(today) {

        const minutes = today.getMinutes();
        const hours = today.getHours();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const weekDay = today.getDay();

        let thisMonth;

        switch (month) {
            case 1:
                thisMonth = 'Janeiro'
                break;
            case 2:
                thisMonth = 'Fevereiro'
                break;
            case 3:
                thisMonth = 'Março'
                break;
            case 4:
                thisMonth = 'Abril'
                break;
            case 5:
                thisMonth = 'Maio'
                break;
            case 6:
                thisMonth = 'Junho'
                break;
            case 7:
                thisMonth = 'Julho'
                break;
            case 8:
                thisMonth = 'Agosto'
                break;
            case 9:
                thisMonth = 'Setembro'
                break;
            case 10:
                thisMonth = 'Outubro'
                break;
            case 11:
                thisMonth = 'Novembro'
                break;
            case 12:
                thisMonth = 'Dezembro'
                break;
            default:
                break;
        }

        let thisDay;

        switch (weekDay) {
            case 0:
                thisDay = 'Domingo'
                break;
            case 1:
                thisDay = 'Segunda-feira'
                break;
            case 2:
                thisDay = 'Terça-feira'
                break;
            case 3:
                thisDay = 'Quarta-feira'
                break;
            case 4:
                thisDay = 'Quinta-Feira'
                break;
            case 5:
                thisDay = 'Sexta-feira'
                break;
            case 6:
                thisDay = 'Sábado'
                break;
            default:
                thisDay = 'Dia Inválido'
                break;
        }
        function verify0 (num) {
            return (num >= 10) ? num : `0${num}`;
        }

        const textFormat = `${thisDay}, ${day} de ${thisMonth} de ${year} ${verify0(hours)}:${verify0(minutes)}`

        const h1 = document.querySelector('#content-container h1');
        h1.innerHTML = textFormat;
    }

    whatDayIsToday(today);


}

myScope();