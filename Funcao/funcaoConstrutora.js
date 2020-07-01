function Carro(velocidadeMaxima = 200, delta = 5){
    // metodo atributo privado
    let velocidadeAtual = 0

    //metodo atributo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo atributo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

/*FUNCAO FUNCIONA COMO UMA CLASSE!!! PARA ASSIM VOCÊ PODER COLOCAR QUANTOS OBJETOS QUISER DENTRO*/

const uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) //new instancia um objeto com uma função construtora
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //função
console.log(typeof ferrari) //objetop