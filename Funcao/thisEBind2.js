function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function(){ //executa a função uma vez a cada 1 segundo
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //o bind serve para pegar o idade e todas variaveis dentro da funcao pessoa (this)
}

new Pessoa