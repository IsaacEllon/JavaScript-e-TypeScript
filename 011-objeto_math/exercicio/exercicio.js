const input = prompt('Digite um número:');

document.body.innerHTML = `Raiz quadrada: ${input ** 0.5}<br />`;
document.body.innerHTML += `${input} é inteiro: ${Number.isInteger(input)}<br />`;
document.body.innerHTML += `É NaN: ${Number.isNaN(input)}<br />`;
document.body.innerHTML += `Arredondado para baixo: ${Math.floor(input)}<br />`;
document.body.innerHTML +=`Arredondado para cima: ${Math.ceil(input)}<br />`;
document.body.innerHTML += `Com duas casas decimais: ${input.toFixed(2)}<br />`;
