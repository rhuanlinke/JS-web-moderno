//while focado em uma quantidade indeterminada de vezes
//for é para uma determinada de vezes

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    console.log(max,min,Math.random())
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {//enquanto a expressão é verdadeira
    opcao = getInteiroAleatorioEntre(-1,10)
    //console.log(`Opção escolhida foi ${opcao}`)
    console.log('Opção escolhida foi ' + opcao)
}

console.log('Até a próxima!')