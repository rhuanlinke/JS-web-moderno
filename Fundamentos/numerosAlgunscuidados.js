console.log(7/ 0) //existe resultado infinity no JS, sem erros
console.log("10" / 2) //é possível dividir uma "string numérica" por um numero
console.log("5" + 2) //no caso do simbolo +, ele irá concatenar se um dos dois valores for string, e não somar.
console.log("Show!" * 2) // Será gerado um NaN (Not a Number)
console.log(0.1 + 0.7) //JS não retornará 0.8 exatamente, e sim um ponto flutuante de 7.9999999...

// console.log(10.toString())
console.log((12.355).toFixed(2)) //se quiser limitar os caracteres de um numero, terá que coloca-lo entre parenteses antes do .toFixed()