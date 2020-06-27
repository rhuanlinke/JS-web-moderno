function soBoaNoticia (nota) {
    if(nota >= 8){
        console.log('If True ' + nota)
    }
    else{
        console.log('If False ' + nota)
    }
}
soBoaNoticia(9)
soBoaNoticia(7)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log ('É verdade...' + valor)
    }
    //if(valor) sozinho, trará se ele for verdadeiro ou falso
}

//falsos
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

//verdadeiros
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})