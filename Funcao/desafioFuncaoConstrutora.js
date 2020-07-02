function Pessoa(nome) {
    this.nome =nome 

    this.falar = function() {
        console.log('Meu nome é '+this.nome)
        //return this.nome
    }
}

const p1 = new Pessoa('João')
p1.falar()
//console.log('Meu nome é '+p1.falar())

//class é uma função construtora desfarçada!
//tem que definir a função e usar this para trazer o parametro como variavel global. Não precisa retornar valor pois o console.log já está dentro da função