// Métodos de instância e estáticos

function teste() {
    console.log('Este é meu teste.');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    aumentarVolume() {// método de instânica
        this.volume += 2;
    }
    diminuirVolume() { // método de instânica
        this.volume -= 2;
    }
    static soma(x, y) { // método estático - só é possível acessar pela classe
        return console.log(x + y);  // não tem acesso aos dados da instância
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.soma(3, 5);
console.log(controle1);