let isAtivo = false //valores booleanos são verdadeiros ou falsos
console.log(isAtivo)

isAtivo = true
console.log(isAtivo+" hehe")

isAtivo = 1 //deixou de ser booleano
console.log(isAtivo!=1,!!isAtivo,!isAtivo) //se torna booleano pois disse q não era 1, ! é negação, o contrário. !! verdadeiro !!! é falso !!!! verdadeiro...

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!"qualquercoisa")
console.log(!![]) //array
console.log(!!{}) //objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!'') //vazio
console.log(!!null) //nulo
console.log(!!NaN) //not a number
console.log(!!undefined) //indefinido
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!('' || null || 0 || 'teste')) //trará de resultado se tem algum verdadeiro
console.log(('' || null || 0 || 'teste')) //trará de resultado qualquer um que seja verdadeiro

let nome = "oi"
console.log(nome || "Desconhecido")