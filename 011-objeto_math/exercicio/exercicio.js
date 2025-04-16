const numero = Number(prompt('Digite um número:'));

const numerotitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numerotitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5} </p>`;
texto.innerHTML += `${numero} é inteiro: ${(Number.isInteger(numero))}<br /><br />`;
texto.innerHTML += `É NaN: ${Number.isNaN(numero)}<br /><br />`;
texto.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}<br /><br />`;
texto.innerHTML += `Arredondado para cima: ${Math.ceil(numero)}<br /><br />`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br /><br />`;

// document.body.innerHTML = `Raiz quadrada: ${input ** 0.5}<br /><br />`;
// document.body.innerHTML += `${input} é inteiro: ${parseFloat(Number.isInteger(input))}<br /><br />`;
// document.body.innerHTML += `É NaN: ${Number.isNaN(input)}<br /><br />`;
// document.body.innerHTML += `Arredondado para baixo: ${Math.floor(input)}<br /><br />`;
// document.body.innerHTML += `Arredondado para cima: ${Math.ceil(input)}<br /><br />`;
// document.body.innerHTML += `Com duas casas decimais: ${parseFloat(input.toFixed(2))}<br /><br />`;
