/*const prod1 = {
    nome: 'Oleo',
    preco: 45
}
const prod2 = {
    nome: 'Pneu',
    preco: 48
}*/

//Factory simples: "Função Factory" é uma função que retorna um objeto
function criarPessoa(x, y) {

    return {
        nome: x,
        sobrenome: y
    }
}

console.log(criarPessoa('Ana', 'Claudia'))