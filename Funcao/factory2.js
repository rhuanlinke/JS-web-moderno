function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Oleo',1212.49))
console.log(criarProduto('Ipad',1199.49))