const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //pessoa.saudacao pessoa é o this desse obj
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //função (bind) que determina quem é o this quando estivermos falando de uma outra função. Nesse caso "falarDePessoa" equivale a função "falar" dentro de pessoa
falarDePessoa()