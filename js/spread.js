// Spread Operator

a = [1, 2, 3]
b = a
c = [...a, 1000,2000]
a.push(4)

console.log(a)
console.log(b)
console.log(c)

a[0] = 100

console.log(a)
console.log(b)
console.log(c)

// Spread with functions

function fun(a, b, c) {
    console.log(a + b + c)
}

params = [1, 2, 3]
fun(params)
fun(...params)


