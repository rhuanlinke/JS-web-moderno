const funcs = []

for(let i = 0; i<10; i++) {
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]() //LET traz resultados diferentes, porque cada função tem seu escopo!!!!