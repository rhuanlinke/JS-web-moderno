const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){ //função que arredonda o valor para baixo INTEIRO
        case 10: //se for 10 e n tem nada, vai olhar na de baixo
        case 9: 
            console.log('Quadro de Honra')
            break //vai parar por aqui e retornar
        case 8: case7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        default: //é um else. Ou seja, qualquer coisa que não é o pedido acima
            console.log('Nota inválida')

    }
}

imprimirResultado (10)
imprimirResultado (8.9)
imprimirResultado (8.9)
imprimirResultado (6.55)
imprimirResultado (3.95)
imprimirResultado (11)
//comentar varios ALT+SHIFT+A