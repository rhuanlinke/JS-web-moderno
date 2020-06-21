const prod1 = {} //{} representa objeto, da mesma forma que [] representa array
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79,
    categoria: {
        adidas: 3,
        nike: 4,
            tipo: {
                semideia: 5
            }
    }
} //objeto dentro de objeto dentro de objeto...

console.log(prod2)

//"{ "nome": "Camisa JSON", "preco": 90}" // <-- isso é um JSON. Um formato textual de objetos dentro de chaves. Aspas duplas definem o