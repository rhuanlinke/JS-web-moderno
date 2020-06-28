const f3 = () => {
    console.log('abc'),
    console.log('123')
    function f4() {console.log(this === globalThis)} //true
}
f3()