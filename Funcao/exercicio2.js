/*
1. Equilátero: Os três lados são iguais. 
2. Isósceles: Dois lados iguais. 
3. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/
var triangulo

trianguloCalc(5, 4, 3)
console.log(triangulo)

function trianguloCalc (x, y, z){
    if(x == y && y == z){
        return triangulo = ("Equilátero")
    }else if(x == y || y == z || x == z){
        return triangulo = ("Isóceles")
    } else{
        return triangulo = ("Escaleno")
    }
}