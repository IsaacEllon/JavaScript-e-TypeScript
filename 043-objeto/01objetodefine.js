// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // Mostra a chave
        value: estoque,  // valor da chave
        writable: false, // writable - pergunta se pode alterar o valor.
        configurable: false // configurable - Pode realterar/ deletar a chave (configurável)
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true,  // Mostra a chave
            value: nome,  // valor da chave
            writable: true, // writable - pergunta se pode alterar o valor.
            configurable: true // configurable - Pode realterar/ deletar a chave (configurável)
        },
        preco: {
            enumerable: true,  // Mostra a chave
            value: preco,  // valor da chave
            writable: true, // writable - pergunta se pode alterar o valor.
            configurable: true // configurable - Pode realterar/ deletar a chave (configurável)
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);