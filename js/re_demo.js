// exec() 
let s = "Abc 123 234"
let matches = /\d+/.exec(s)

console.log(matches)
console.log("Found " + matches[0] + " at " + matches.index)

console.log(/\w+/.exec(s))

// test() 
console.log(/[A-Z]+/.test("ABC 123"))

