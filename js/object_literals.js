
function print_person(p) {
    console.log(p.name)
}

let person = { name: 'Alex', email: 'alex@gmail.com' }  // object literal 
let player = { name: 'Dhoni', game : 'Cricket'}

console.log(person.name)
print_person(person)
print_person(player)

// Spread operator with object
let p2 = { ...person, mobile: '484883343', email  : 'alex@yahoo.com' };
console.log(p2)

function display({name, email}) {
    console.log(name)
    console.log(email)
}

display(person)   // To be done 

