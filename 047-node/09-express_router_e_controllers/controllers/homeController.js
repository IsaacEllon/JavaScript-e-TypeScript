exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            Sobrenome: <input type="text" name="sobrenome">
            <button>Enviar formulário</button> 
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou a sua nova rota de POST');
};