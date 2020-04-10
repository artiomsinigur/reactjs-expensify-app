const add = ({ a, b = 2 }, c) => {
    return a + b + c
}

console.log(add({ a: 1 }, 100))