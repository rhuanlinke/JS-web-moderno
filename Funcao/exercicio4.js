/*Crie uma função que irá receber dois valores: o dividendo e o divisor.
A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

divisao(5,3)

function divisao(x, y){
    console.log("Resultado Div = "+(x/y).toFixed(2))
    console.log("Reusltado Resto = "+x%y)
}