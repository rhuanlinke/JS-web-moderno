//for in nos dá a quantidade de indices do elemento nesse caso [0,1,2,3,4] (5x)
const notas = [6, 7, 9, 8, 7]

for (let i in notas) { //pra cada um dos elementos da nota ele vai dar um indice i
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

for (let e in notas) { //e é o indice, e notas a variavel/array
    console.log("Nota nro "+e+" né msm = "+notas[e])
}