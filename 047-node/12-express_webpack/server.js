const express = require('express');
const app = express();
const routes = require('./router');
const path = require('path');


// Middleware para interpretar o corpo dos formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(routes);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
