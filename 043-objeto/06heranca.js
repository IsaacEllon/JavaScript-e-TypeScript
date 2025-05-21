// Herança 

// Produto -> aumento, desconto
// Camisa -> cor, Caneca -> material

function Produto(nome, preco) { // Construtor
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // lincou a função Camiseta com a função Produto
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);  // O prototype de Camiseta será igual ao prototype de Produto
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function (percentual) { 
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Genérico', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 14, 'Plástico', 5);
camiseta.aumento(100);

console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);
