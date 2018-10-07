let person = {
    name: '',
    age: '',
    gender:''
};

let disooqi = Object.create(person);
disooqi.name = 'Mohamed Eldesouki';
disooqi.age = 36;

console.log(disooqi);
console.log(person);

let personRef = Object.getPrototypeOf(disooqi);
personRef.weight = 85;

console.log(person);
console.log(personRef);

disooqi.car = 'Mazda';

console.log(disooqi.hasOwnProperty('car'));
console.log(disooqi.hasOwnProperty('name'));
console.log(disooqi.hasOwnProperty('gender'));

console.log(person.hasOwnProperty('gender'));
console.log(person.hasOwnProperty('car'));

console.log(disooqi.hasOwnProperty('tall'));

// Object <- person <- disooqi
