function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1: 
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            break;
        case 3: 
            diaSemanaTexto = 'Segunda';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5: 
            diaSemanaTexto = 'Sexta';
            break;
        case 6: 
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = '';
            break;
    }
    return diaSemanaTexto;
}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
// let diaSemanaTexto;

// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1: 
//         diaSemanaTexto = 'Segunda';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça';
//         break;
//     case 3: 
//         diaSemanaTexto = 'Segunda';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta';
//         break;
//     case 5: 
//         diaSemanaTexto = 'Sexta';
//         break;
//     case 6: 
//         diaSemanaTexto = 'Sábado';
//         break;
//     default:
//         diaSemanaTexto = '';
//         break;
// }

console.log(diaSemana, diaSemanaTexto);