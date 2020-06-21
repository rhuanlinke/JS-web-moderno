var a = 3
let b = 4 //tente utilizar mais let para declarar variaveis
const c = 5

var a = 30 //var pode se redeclarado
//let b = 40 <- let não pode se redeclarado

console.log(a,b,c)

a = 300 
b = 400 //o que já foi declarado como let pode ser redeclarado, desde que não use let

console.log(a,b)

const c = 5
//c = 50 // const não pode ser redeclarado de forma alguma, pode isso deve ser utilizado para argumentos que não serão alterados.