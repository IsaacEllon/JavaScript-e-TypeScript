// Getters e Setters
// Serve para proteger a propriedade

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // Mostra a chave
        configurable: true, // configurable - Pode realterar/ deletar a chave (configurável)
        get: function() {  // set - pegar o elemento
            return estoquePrivado;
        },
        set: function(valor) { // set - configurar o valor.
            if (typeof valor !== 'number') {
                throw new TypeError('mensagem');
            }
            
            estoquePrivado = valor;
        } 
    });
}

function criaPrdouto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 32;
// console.log(p1.estoque);

const p2 = criaPrdouto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);