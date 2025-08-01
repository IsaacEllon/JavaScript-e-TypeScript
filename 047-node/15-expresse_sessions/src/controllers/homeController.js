exports.paginaInicial = (req, res) => {
    req.flash('info', 'Olá mundo!');
    req.flash('error', 'adAFSFGDSG');
    req.flash('success', 'Blaaaaa');
    // req.session.usuario = {nome: 'Luiz', logado: true};
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};