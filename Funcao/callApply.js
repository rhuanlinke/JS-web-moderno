function getPreco(imposto = 0, moeda = 'R$') {
    return moeda+' '+this.preco*(1 - this.desc)*(1+imposto)

}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}


console.log(getPreco())
console.log(produto.getPreco()) //produto é o this da função

const carro = { preco: 49990, desconto: 0.20}
console.log(getPreco.call(carro)) //
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) //call você coloca primeiro o objeto que será contexto, e depois os parâmetros separados por virgula

console.log(getPreco.apply(carro, [0.17, '$'])) //apply você coloca primeiro o objeto que será contexto, e depois os parâmetros dentro de um array