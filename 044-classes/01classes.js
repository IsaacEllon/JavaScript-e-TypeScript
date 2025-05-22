// Classes

class Pessoa {
    constructor(nome, sobrenome) {  // método
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }
}

const p1 = new Pessoa('Isaac', 'Ellon');
const p2 = new Pessoa('Luiz', 'Otávio');
const p3 = new Pessoa('Joana', 'Miranda');
const p4 = new Pessoa('Héllen', 'Ferreira');
console.log(p1.falar());
console.log(p2.falar());
console.log(p3.falar());
console.log(p4.falar());