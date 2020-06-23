//novo recurso do ES2015

const pessoa = {
    nome: 'ANA',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome,idade} = pessoa //retire {isto} de dentro deste = objeto
console.log(nome,idade) //agora estão na window ou global

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)
    
const {endereco: {logradouro, numero,cep}} = pessoa
console.log(logradouro,numero,cep)

const {ag, ag1} = pessoa
console.log(ag,ag1)

