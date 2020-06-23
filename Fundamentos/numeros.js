const peso1 = 1.0
const peso2 = Number('2.1') //2.0 será true para number, mas 2.1 será false, pois é flutuante (float no C)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.313
const avaliacao2 = 6.321

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (media.toFixed(2)) //toFixed(numero) determinará o limite de caracteres
console.log(media.toString()) //toString transformará o valor da constante media em string (caracteres)
console.log(typeof media, Number) //typeof diz qual o tipo da constante/variavel
//Number por acaso é uma função...