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