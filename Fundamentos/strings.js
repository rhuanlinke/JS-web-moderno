const escola = "Cod3r"

console.log(escola.charAt(4)) //vai me dar a letra que está dentro do índice 4 da string (R)
console.log(escola.charAt(5)) //quando está fora, não dará erro, trará um resultado vazio
console.log(escola.charCodeAt(3)) //valor de 3 dentro da tabela UNICODE é 51 (alt+51 = 3)
console.log(escola.indexOf('3'))

console.log(escola.substring(1))//irá pular o tanto de casas informadas
console.log(escola.substring(0,3))//vai do índice 1 até o indice 2, pulando o 0 e 3.
console.log('Escola '.concat(escola).concat("!"))//.concat sever para juntar os caracteres de 2 ou mais strings de forma assimétrica
console.log('Escola',escola,"!") // <-tipo isso só que melhor

console.log(escola.replace(3, 'e')) //replace substitui, simplesmente

console.log('Ana,Maria,Pedro'.split(',')) //split irá separar cada uma das strings em uma "array"

console.log("Escola " + escola + "!") //O + para string é uma outra forma de concatenar, sem utilizar o .concat("string")