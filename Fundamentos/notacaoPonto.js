console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' //as duas são válidas, mas esta não recomendada apesar de poder ser acessada por string ou por espaços/caracteres especiais. 
console.log(obj1.nome)

function Obj(nome) { //função Obj(quetemnomeaqui)
    this.nome = nome//this torna a função ou o objeto global
}
const obj2 = new Obj('Cadeira') //tornou 'Cadeira' o nome da função contida em obj2
const obj3 = new Obj('Mesa') //tornou 'Mesa' o nome da função contida em obj2
console.log(obj2.nome) //imprime o objeto com o nome da função
console.log(obj3.nome)