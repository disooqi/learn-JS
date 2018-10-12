
function runMe(anObject){
    console.log(anObject.property);
}

// let theObject = {};
// theObject.property = 7;
// runMe(theObject);
//
// let aSecObject = {};
// runMe(aSecObject);
//
// let aThirdObject = null;
// runMe(aThirdObject);

function tryCatch(anObject) {
    try {
        console.log(anObject.dahia);
    } catch (error) {
        // console.log(error);
        console.log(error.message);
    } finally {
        // for resources
    }
}

let aThirdObject = {};
// tryCatch(aThirdObject);

function throwError(anObject) {
    if(typeof anObject !== "object" || anObject === null){
        throw new Error('This is not an object ' + typeof anObject);
    }
    if(!anObject.hasOwnProperty(dahia)){
        throw new Error('This is a disooqi error!!!');
    }else {
        console.log(anObject.dahia)
    }
}

throwError(aThirdObject);
