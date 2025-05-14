function criaCalculadora() {
    return {
        display: document.querySelector('.display'),





        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => { // Com o arrow function não se perde o this
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {  
                    this.btnParaDisplay(el.innerText); // Pega o texto que está na tabela 
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor; // coloca o valor no display
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // Tamanho da string -1
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();