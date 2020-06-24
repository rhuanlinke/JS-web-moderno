let a = 3

global.b = 123
this.c = 456
this.d = 457
this.e = 458

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports == global)
console.log(this == global)
console.log(this.c, this.d, this.e)
console.log(module.exports)

//no navegador this é === a window, porém no node this não é igual a global
//module.exports é igual a this