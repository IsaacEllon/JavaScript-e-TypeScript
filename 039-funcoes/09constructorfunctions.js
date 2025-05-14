// Constructor functions (funções construtoras) 
// Cria o objeto e retornar o objeto
// Construtora -> Sempre precisar inicar com letra Maiúscula - Pessoa (new)
// Não precisa usar vírgula igual nas factorys

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privadas
    const id = 123456;  
    const metodoInterno = function () {

    }

    // Atributos ou métodos públicos
    this.nome = nome; // this.nome é a mesma coisa que Pessoa.nome.
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ':sou um método');
    }
}

const p1 = new Pessoa('Isaac', 'Ellon');
const p2 = new Pessoa('Héllen', 'Ferreira');

p1.metodo();