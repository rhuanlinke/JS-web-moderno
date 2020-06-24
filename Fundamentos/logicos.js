function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //ou exclusivo
    const manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //retornando todos valores como objetos.
    //OBJETO É UMA COLEÇÃO DE CHAVE E VALOR!!!

    //return {comprarSorvete: comprarSorvete, comprarTv50: comprarTv50, comprarTv32, manterSaudavel: manterSaudavel} //poderia ser assim

}

console.log(compras(true,true))