class Pessoa {
    constructor(nome){
        this.nome = nome //variavel se tornou publica
    }

    falar () {
        console.log('Meu nome é '+this.nome) //sem o this daria erro pois this que é publico!!!
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log('Meu nome é '+nome)
    }
}

const p2 = criarPessoa('João')
p2.falar()