const valores = [7.7, 8.9, 6.3, 9.2, "Oi"] //array é quando informa varios valores, ou uma linha de valores dentro de uma constante/variavel
console.log(valores[0],valores[3])
console.log(valores)
console.log(valores[6]) //dará undefined, pois n existe um sexto elemento

valores[4] = 10 //insere ou substitui o valor dentro do array
valores[6] = 10 //elemento 5 ficará vazio
console.log(valores)
console.log(valores.length) //dirá quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste') //push irá inserir coisas novas dentro do array, após o último elemento existente
console.log(valores)

console.log(valores.pop()) //retira a ultima informacao do array e traz em tela (teste)

console.log(valores) //retirou o teste após o pop

console.log(typeof valores) //array é um objeto...