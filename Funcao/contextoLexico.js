const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao() //vai trazer Global, pois a função foi declarada no escopo global CONTEXTO LEXICO! CLOSURES
}

exec()