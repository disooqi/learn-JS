// class declaration
class class1 {

}

// class expression
let class2 = class {

};

class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    print(){
        console.log(`My name is ${this.name} and I am ${this.age} years old and I am a ${this.gender}.`);
    }
}

let disooqi = new Person('Mohamed Eldesouki', 36, 'man');
disooqi.print();

class Programmer extends Person{
    constructor(name, age, gender, progLang){
        super(name, age, gender, progLang); // the super method here is just from my mind never learned in any place
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.progLang = progLang;
    }
}
let dos = new Programmer('Mohamed', 31, 'male', 'Python');
dos.print();