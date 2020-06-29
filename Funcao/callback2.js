const notas = [7, 6, 5, 4, 3, 2, 1, 9, 7, 8, 99, 12,1.5 ,6 ,5 ,4]

//Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 3) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com callback
//filtra os elementos de um array por um critério e coloca dentro de um subarray
const notasBaixas2 = notas.filter(function (nota){
    return nota < 3 //esse é o critério
})
console.log(notasBaixas2)

//Com callback e arrow function
const notasBaixas3 = notas.filter(nota => nota <3)
console.log(notasBaixas3)