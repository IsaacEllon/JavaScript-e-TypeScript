/*
Entre 0 - 11 - Bom dia!
Entre 12 - 17 - Boa tarde!
ENtre 18 - 23 - Boa noite!
*/

// if pode ser utilizado sozinho
// Sempre que for utilizado else, precisa ter um if antes. 
// Só pode ter um else na checagem.

const hora = 14;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 19 && hora <=23) {
    console.log('Boa Noite!');
} else {
    console.log('Hora inválida!')
};