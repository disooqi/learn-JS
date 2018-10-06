console.log('hi');

const x = 2;
let y = 3;

let z = x+y;
console.log(z);

console.log(typeof z);
const a = 3.29989809809899999999999999999999999999999999999999;
console.log(typeof a);

let b=true;
console.log(typeof b);

let c='disooqi';
console.log(typeof c);

let d = '6';
// coercion vs casting :-
// The word coercion is used to denote an implicit conversion.
// The word cast typically refers to an explicit type conversion, regardless of whether this is a re-interpretation of
// a bit-pattern or a real conversion
console.log(y+d);
console.log(y+parseInt(d, 10)); // 10 is for decimal system
console.log(parseInt('Dos', 10)); // NaN stands for "Not a Number"

let nan = isNaN(parseInt('Dos'));
console.log(nan);

b = 5;
b++;
console.log(++b);
console.log(10%3, 10/3);

//logical and:&& logical or:||

b = ['Dos', 3, true, 5.3];
console.log(b[0]);
console.log(b);
b[1] = 878989;
console.log(typeof b);
console.log(b[12]);
console.log(b.length);

//sparse arr
b[999] = 0;
console.log(b);
console.log(b.length);
console.log(b[6]);
b.push(55555);
console.log(b);
console.log(b.length);
console.log(b.pop());
b.pop();
console.log(b.pop());
console.log(b);
console.log(b.length);
