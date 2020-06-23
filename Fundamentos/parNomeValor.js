// par nome/valor
const saudacao = 'OPA' //contexto léxico 1. LÉXICO É O LOCAL que a informação consta no código (bloco de livros)

function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor ou chave/valor ou identificador/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}
let a
console.log(saudacao)
console.log(exec())
console.log(cliente)