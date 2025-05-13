// Executada quando uma ação finaliza. 
function rand(min=1000, max= 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// f1(function() {
//     f2(function(){
//         f3(function(){                   // Callback
//             console.log('Olá mundo');
//         }) ;
//     });
// });

f1(f1callback);

function f1callback() {
    f2(f2calback);
}

function f2calback() {
    f3(f3calcback);
}

function f3calcback() {
    console.log('Olá mundo');
}