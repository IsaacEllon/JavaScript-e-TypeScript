// const nome = 'Isaac'
// const sobrenome = 'Ellon';

// const falaNome = () => nome + ' ' + sobrenome;

// // Maneira 1 de exportar
// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// // Maneira 2
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// // Maneira 3
// this.qualquerCoisa = 'O que eu quiser exportar';


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
