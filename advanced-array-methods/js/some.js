function hasEvenNumber(arr){
    return arr.some(function(value){
        return value % 2 === 0;
    });
}

function hasComma(str){
    return str.split('').some(function(value){
        return value === ',';
    });
}

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
    return arr.some(function(value){
        return value % 2 !== 0;
    });
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num){
    return num.toString().split('').some(function(value){
        return parseInt(value) === 0;
    });
}