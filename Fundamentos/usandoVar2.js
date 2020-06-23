var numero = 1 //escopo global

function astolfo (){
    var numero = 2 //escopo função
    console.log('dentro = ', numero)
}
console.log("fora =", numero)