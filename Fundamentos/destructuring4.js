function rand([min=0, max=1000]){
    if (min > max) [min,max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log (rand([50,40])) //tudo que tem entre 50 e 40
console.log(rand([995])) //apenar este valor comparado ao segundo
console.log(rand([,10]))//irá ignorar o primeiro valor, fará de 0 até 10
console.log(rand([])) //navegará de 0 até 1000
console.log(rand()) //como não foi inserido vetor, dará erro