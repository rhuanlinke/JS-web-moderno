const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if (x == 5) {
        break //interrompe e sai do bloco if/for
    }
    console.log(x, '= '+nums[x])
}

for (y in nums) {
    if (y == 5){
        continue //interrompe e vai para a proxima repetição dentro do bloco
    } 
    console.log(y,'= '+nums[y])
}

externo: for (a in nums) { //rotulando o for externo
    for (b in nums) {
        if(a == 2 && b == 4) break externo //break o for externo!
        console.log('Par = '+a,' '+b)
    }

}
console.log('FIM!')