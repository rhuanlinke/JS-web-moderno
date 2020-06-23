const [a] = [10]
//não é Array, cuidado!!! não faz sentido usar "a" aqui
console.log(a)

const [n1, ,n3, , n5, n6 = 0] = [10,7,9,8]//7 e 8 vão para lugar nenhum
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[, 8,8],[9,6,8]] // não utilizar
console.log(nota)

