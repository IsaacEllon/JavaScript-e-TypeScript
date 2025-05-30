class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // trava o envio do furmulário
        const camposValidos = this.campoSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado!');
            this.formulario.submit();
        }
        
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'A senha precisa está entre 6 e 12 caracteres');
        }

        return valid;
    }

    campoSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        
        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        
        if(usuario.lenght <3 || usuario.lenght > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-0]+$/g)) {
            this.criaErro(campo, 'Usuário precisa conter apenas letras ou números');
            valid = false;
        }

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    
    }


}

const valida = new ValidaFormulario();
