console.log('01' , '1' ==1)//== é para igual, mas sem considerar o tipo
console.log('02','1'===1) //=== é para estritamente igual, ou seja, mesmo tipo inclusive
console.log('03','3'!=3)//!= é diferente
console.log('04','3'!==3)//!== é para estritamente diferente, ou seja, considerando o tipo

const d1 = new Date(0) //0 é primeiro de janeiro de 1970
const d2 = new Date(0)
console.log('05', d1===d2) //datas desta forma não são iguais
console.log('06',d1==d2)
console.log('07',d1.getTime() === d2.getTime()) //datas com o .getTime tem o mesmo tipo e valor
console.log('08',undefined == null) //são iguais pois são vazios
console.log('08',undefined === null) //não são estritamente iguais, pois são de tipos diferentes

//#dica: Tente utilizar a igualdade com estritamente igual ===