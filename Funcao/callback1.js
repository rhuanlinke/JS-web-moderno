//forEach() permite executar uma função para cada item de um array.
const fabricantes = ['Mercedes','Audi','BMW']

function imprimir(nome, indice) {
    console.log(indice+1+'. '+nome)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
//forEach() permite executar uma função para cada item de um array.
