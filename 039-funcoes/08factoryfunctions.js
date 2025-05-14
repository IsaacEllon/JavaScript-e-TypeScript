// Factory function (função fábrica) - é uma função normal que retorna um objeto

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // setter
        set nomeCompleto(valor){
            valor = valor.split(' '); // Divide o valor nos espaços. Retornar um array
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`; // this - se refere no escopo local.
        },

        altura: altura,
        peso: peso,

        // getter
        get imc(){ // get imc - finge ser um atributo, assim é necessário chamar o IMC sem parênteses.
            const indice = this.peso / (this.altura * 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Isaac', 'Ellon', 1.76, 75);
const p2 = criaPessoa('Héllen', 'Ferreira', 1.59, 52);
// console.log(p1.fala('Falando sobre JS'));
// console.log(p1.imc); // Chamando com get imc();

p1.nomeCompleto = 'Otávio Miranda Silva';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);


// console.log(p2.fala('Falando sobre JS'));
// console.log(p2.imc);