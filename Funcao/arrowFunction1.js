//o this nunca muda com funções arrow!! isso é ótimo!!
let dobro = function(a) {
    return 2 * a
}

dobro = (a,b) => { //funcao arrow sempre é anonima! portanto se quiser chamar ela dps tem que armazenar numa variavel
    return 2 * a
}

dobro = a => 2 * a //só pode ser usado quando tem um parametro (a) 2*a é return
//return implícito!
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //underline é um parametri, pode usar assim tbm
console.log(ola())