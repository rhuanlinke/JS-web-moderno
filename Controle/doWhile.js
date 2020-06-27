//muito pouco usada, ou seja, whatever

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    console.log(max,min,Math.random())
    return Math.floor(valor)
}

let opcao = -1

do {// vai executar a primeira repetição e deixará de ser -1
    opcao = getInteiroAleatorioEntre(-1,10)
    //console.log(`Opção escolhida foi ${opcao}`)
    console.log('Opção escolhida foi ' + opcao)
} while (opcao != -1)

console.log('Até a próxima!')