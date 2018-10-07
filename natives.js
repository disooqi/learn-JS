
/*
The following are wrappers for primitive type object
----------------------------------------------------
Function()
String()
Number()
Boolean()
Object()
Symbol()
*/

/*
* built-in native object (that wrap primitive)
* ----------------
* Array()
* RegExp()
* */

/*
* Date()
* Error()
* */

let str = new String('disooqi'); // native object
console.log(str);
console.log(str.toString());
console.log(str.toUpperCase());


let myPrimitive = 'disooqi';
console.log(myPrimitive.toUpperCase()); // JS coercing the myPrimitive into native equivalent.


let num = new Number(7);
console.log(typeof num);
let nativeNum = num.valueOf();
console.log(typeof nativeNum);

console.log(typeof [1,2,3]);
