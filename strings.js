let text = 'The quick brown fox jumps over the lazy dog. ';

console.log(text.repeat(2));

console.log(text.slice(0, 15)); // works same as Python slice text[:15]
console.log(text.substr(16, 3));

console.log(text.split(' '));

console.log(text.trim().split(' '));

console.log(text.endsWith('. '));
console.log(text.startsWith('The'));
console.log(text.includes('fox'));
console.log(text.indexOf('over'));
console.log(text.lastIndexOf('over'));
console.log(text.length);