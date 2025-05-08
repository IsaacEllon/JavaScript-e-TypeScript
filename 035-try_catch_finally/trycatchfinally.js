// try - é executado quando não há erros
// catch - é executado quando há erros
// finally - sempre é executado

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    })
}

try {
    const data = new Date('01-01-1980 12:58:12')
    const hora = retornaHora(data);
    console.log(hora);
} catch {
   // Tratar erro 
} finally {
    console.log('Tenha um bom dia!');
}



