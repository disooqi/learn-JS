let a, b, c, d, e;
let f = [1, 2, 3, 4, 5];

[a, b, c, d, e] = f;

console.log(a, b, c, d, e);

let remaining;
[a, b, ...remaining] = f;
console.log(a, b, remaining);



let disooqi = {
    name: 'Mohamed Eldesouki',
    age: 36,
    affiliation: 'QF'
};
let name, age;
({name, age} = disooqi);
console.log(name, age);
