let count = 3;

if(count == 4){
    console.log('it is four');
}else if (count == 0){
    console.log('it is Zero');
}else {
    console.log(count);
}

let engineer = 'disooqi';
switch (engineer.toLowerCase()) {
    case 'disooqi':
        console.log('hi disooqi');
        break;
    case 'hammady':
        console.log('Hi Hammady');
        break;
    default:
        console.log('Who are you?');
}

// ternary operator
let a = 1, b = '1';
// Does a equals b
let result = (a == b) ? 'equal' : 'inequal';
console.log(result);

result = (a === b) ? 'equal' : 'inequal';
console.log(result);

///////////////////////////////////////////////////////////////////////

for(let i = 0; i < 5; i++){
    console.log(i);
}


let arr = ['Mohamed', 'Asmaa', 'Mariam', 'Fatema'];
for (i = 0; i < arr.length; i++){
    const c = arr[i];
    console.log(c);
}

arr.forEach(function (value, index, array) {
    array[index] = value + index;
    console.log(value, index, array);
});


let x = 1;
while(x < 10){
    console.log(x++);
}


