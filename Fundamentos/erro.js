function tratarErroELancar(erro) {
    //throw new Error('Ocorreu um erro de processamento. Contacte o suporte.')
     //Error é uma função, que exibe a mensagem de erro
     //throw 10
     //throw 'String'
     throw { 
         //pode ser posto em um objeto
         nome: erro.namem,
         msg: erro.message,
         date: new Date //new vai executar a função Date
     }

}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') //try é uma tentativa. Se ocorrer um erro executando ele, ele cairá dentro do catch

    } catch (e) {
        //aqui pode tratar o erro, mostrar uma mensagem e etc
        tratarErroELancar(e)
    } finally {
        //será executado sempre, mesmo que ocorra erro ou não
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
