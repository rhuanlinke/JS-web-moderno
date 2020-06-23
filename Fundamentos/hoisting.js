console.log('a=',a) //hoisting: içamento da variável. Mesmo que ela tenha sido declarada abaixo da primeira linha, o sistema interpreta que ela existe, mas ainda não foi declarada (UNDEFINED). NÃO GERA ERRO!!!
var a=2 
console.log('a=',a)

//hoisting é uma curiosidade. Não a utilize, sempre declare as variaveis antes de executar.

let b=2
console.log('let.b=',b) //hoisting não funciona com LET, somente com VAR.
//let b=2
console.log('let.b=',b)
