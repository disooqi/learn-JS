function person(name, age, gender) {
    this.name = name;
    this.age = name;
    this.gender = gender;

    return this;
}

let disooqi = {};
disooqi = person.call(disooqi, 'Mohamed Eldesouki', 36, 'male');

console.log(disooqi);

//--------------------------------------------------------------
// new type
// the 'new' keyword treat a function as a constructor for a nonexistent object (i.e. (1) it creates an empty object
// and (2) make that object as new context for the function (3) treat a function as a constructor for a that object.)
function Person(name, age, gender) {
    this.name = name;
    this.age = name;
    this.gender = gender;
}

let dos = new Person('Mohamed Eldesouki', 36, 'male');
console.log(dos);

