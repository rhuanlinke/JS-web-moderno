function teste1(num){
    //pode ou não usar chaves, mas o ideal é utilizar!!!
    if(num > 7)
        console.log(num) //este está associado ao if
        console.log('Final') //este não está associado
}

teste1(6)
teste1(8)

function teste2(num) {
    //tente não usar ';' em estruturas de controle
    if(num > 7); {
        console.log(num)
    }
}
teste2(6)
teste2(8)
//não vai fazer nada pois antes do {} tem um ;, que é uma sentença de código. Ele vai ignorar o restante nesse caso.