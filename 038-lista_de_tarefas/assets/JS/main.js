const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // Focus é o evento de clicar no input
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { //keyCode 13 é o da tecla Enter
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', ('apagar')); // Atribui uma classe para o butão
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    }
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Substituindo o texto 'Apagar' para vazio
        listaDeTarefas.push(tarefaTexto); 
    }
    
    const tarefaJSON = JSON.stringify(listaDeTarefas); // converte para JSON em string
    localStorage.setItem('tarefas', tarefaJSON);  // o primeiro atributo é o nome utilizado para recuperar o arquivo, no caso 'tarefas'.
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Converte para uma lista novamente

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionarTarefasSalvas();