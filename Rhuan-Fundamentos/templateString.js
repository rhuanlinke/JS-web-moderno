const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
const template = `
    Olá
    ${nome}!` 
    //utilizando este tipo de string (template), é possível criar um grande texto sem utilizar \n \n \n para quebrar a linha

console.log(concatenacao,template)

//expressões...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("Cuidado")}!`)