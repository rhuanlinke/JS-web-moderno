var numero = 1 //var tem 2 escopos: GLOBAL e FUNÇÃO
{
    let numero = 2
    console.log('dentro =', numero)
    {
        let numero = 4 //let tem 3 escopos: GLOBAL, FUNÇÃO e BLOCO
        console.log('dentro de dentro =', numero)
    }
}
console.log('fora =',numero)