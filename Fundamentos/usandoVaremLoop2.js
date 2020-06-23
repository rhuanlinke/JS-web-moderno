const funcs = []

for(var i = 0; i<10; i++) {
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() //ambos resultados são 10 (uma limitação de VAR)