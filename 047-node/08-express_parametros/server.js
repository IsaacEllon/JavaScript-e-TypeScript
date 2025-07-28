const express = require('express');
const app = express();

// /profiles/1235?
// campanha=googleads &
// nome_campanha=seila

// ? -> Query string


// Middleware para interpretar o corpo dos formulários
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            Sobrenome: <input type="text" name="sobrenome">
            <button>Enviar formulário</button> 
        </form>
        `);
});

// ? - no final idUsuarios deixa o params como opicional
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {  // :idUsuarios -> É o que vai ser recebido na chave params
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.idade);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome} ${req.body.sobrenome}`); // name do input = nome
});

app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
