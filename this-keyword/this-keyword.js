// Inside object literal, this keyword refers to the object itself

let disooqi = {
    fullname: 'Mohamed Eldesouki',
    occupation: 'Research Associate acting as Software Engineer',
    define: function () {
        return this.fullname + ' is a ' + this.occupation;
    }
};

console.log(disooqi.define());

// Inside a function, this keyword is based on how you call the function
function tryThis(){
    return this;
}

console.log(tryThis()===global);
console.log(this===global);

function tryThisUsingStrict() {
    'use strict';
    return this;
}
console.log(tryThisUsingStrict()===global);
console.log(tryThisUsingStrict()===undefined);

global.fullname= 'Moha Moha';
function checkValue(place, affiliation) {
    // this keyword refer to global object
    return this.fullname+' is in '+place+' and works for '+affiliation;
}

let checkValueInGlobal = checkValue;
console.log(checkValueInGlobal('Doha', 'QF'));

let checkValueInDisooqiObj = checkValue;
console.log(checkValueInDisooqiObj.call(disooqi, 'Doha', 'QF'));
console.log(checkValueInDisooqiObj.apply(disooqi, ['Doha', 'QF']));

disooqi.print = checkValue;
console.log(disooqi.print('Doha', 'QF')); // it is equivalent to use .call or .apply

/*####### Very Important note #####
    In all the former ways, the property that comes after this keyword "i.e. this.property" must be in the object "this"
    represent. so, for example disooqi obj has a property named fullname and global object also has a property named
    fullname.
*/
