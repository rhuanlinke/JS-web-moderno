console.log(soma (3,4))
// function declaration //primeiro carrega as function dec. e então faz o console
function soma(x, y) {
    return x + y
}

// function expression //atribui a função a uma variável
const sub = function (x, y) {
    return x - y
}

// named function expression //mostra o nome no "stack"
const mult = function mult(x, y) {
    return x * y
}