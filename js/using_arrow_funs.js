// Arrow functions demo 

function isBigName(name) {
    return  name.length > 5
}

let names = ["JavaScript", "Java", "Python", "C#"]

// filter()
var selnames = names.filter(isBigName);
console.log(selnames)

// filter()
var selnames = names.filter(name => name.length > 5);
console.log(selnames)

// Arrow function 
var pname = names.find( name => name.startsWith('P') )  
console.log(pname)

// forEach() 
names.forEach( (name, idx) => console.log(name + " at "  + idx))

// map()
var upperNames = names.map(name => name.toUpperCase());
console.log(upperNames)

// map()
var results = names.map( n => n.length)
console.log(results)
 

 