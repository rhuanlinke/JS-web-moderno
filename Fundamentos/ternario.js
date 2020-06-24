//unario = 1operando
//binario = 2operandos
//ternario = 3operandos

//funcao por arrow
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //se for maior ou igual a 7, retoranr 'Aprovado', se não for, 'Reprovado IF ELSE
/*const resultado = nota => {
    return nota >= 7 ? 'Aprovado' > 'Reprovado'
}*/

console.log(resultado(7.1))
console.log(resultado(5))
