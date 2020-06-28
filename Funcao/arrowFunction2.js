function Pessoa() {
    this.idade = 0

    setInterval(() => { //executa a função uma vez a cada 1 segundo
        this.idade++ //this aponta para pessoa pois esta função é implicita! arrow!
        console.log(this.idade)
    }, 1000)
}

new Pessoa