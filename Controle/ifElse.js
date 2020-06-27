/*const imprimirResultado = function(nota) {
    if(nota >=7) {
        console.log('Aprovado!')
    }
    else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)*/
//é possível definir uma constante como função, ou então criar uma função direto

function imprimirResultado(nota) {
    if(nota >=7) {
        console.log('Aprovado!')
    }
    else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //Falso, e Reprovado. Cuidado com strings
