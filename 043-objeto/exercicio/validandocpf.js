// CPF 705.484.450-52
// CPF 070.987.720-03

// Pega os primeiro 9 digitos e multiplicar por uma sequência regressiva
// para obter o primeiro dígito. 
//
//   7  0  5  4  8  4  4  5  0
// x10 x9 x8 x7 x6 x5 x4 x3 x2
//_____________________________
//  70  0 40 28 48 20 16 15  0 = 237

// 11 - (237 % 11) = 5 primeiro dígito (resto)
// Se o digito for maior que 9, considera ele como 0

//   7   0  5  4  8  4  4  5  0  5
// x11 x10 x9 x8 x7 x6 x5 x4 x3 x2
//_________________________________
//  77   0 45 32 56 24 20 20  0 10 = 284

// 11 - (284 % 11) = 2 primeiro dígito (resto)
// Se o digito for maior que 9, considera ele como 0

function ValidadCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidadCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false; 

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

ValidadCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acumulador, val) => {
        acumulador += (regressivo * Number(val));
        regressivo--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidadCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidadCPF('705.484.450-52');
console.log(cpf.valida());