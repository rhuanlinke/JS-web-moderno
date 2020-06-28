//for in nos dá os atributos do elemento
const notas = [6, 7, 9, 8, 7]

for (let i in notas) {
    console.log(notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 85
}

for (let atributo in pessoa) {
    console.log(atributo, '= ' + pessoa[atributo])
}