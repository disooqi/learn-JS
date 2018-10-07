// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// g modifier to match all the occurrences
let rePattern = /Lorem\sipsum/g;


let sentence = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean 
massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque Lorem ipsum eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
aliquet nec, vulputate`;

console.log(rePattern.test(sentence));
console.log(sentence.replace(rePattern, 'Mohamed Eldesouki'));

let a = sentence.match(rePattern);
console.log(a);

a.forEach(function (v, i) {
    console.log(v,i);

});