let str_array = ['disooqi', 'Mohamed', 'Eldesouki', 'Tawfik'];
let num_array = [1, 2, 3, 4, 5, 6];

// Add or remove from the end
num_array.push(7);
console.log(num_array);

num_array.pop();
console.log(num_array);

// Add or remove from the beginning
num_array.unshift(0);
console.log(num_array);
num_array.shift();
console.log(num_array);

console.log(str_array.concat(num_array));
console.log('joined ', num_array.join('~'));

console.log('reversed ', num_array.reverse());
console.log('sorted ', str_array.sort());

console.log(str_array.indexOf('over'));
console.log(str_array.lastIndexOf('over'));


str_array.forEach((value, index, array) => {
    console.log(value, index, array);
});

let new_str_array = str_array.map((value) => {
    return value+'_map';
});

console.log(new_str_array);

let filtered = num_array.filter((value => value<3)); // let filtered = num_array.filter((value => {if(value<3) return value;} ));
console.log(filtered);

// are every item in the list follow the condition
let evry = num_array.every((value => value<10));
let some = num_array.some((value => value<3));

console.log(evry);
console.log(some);