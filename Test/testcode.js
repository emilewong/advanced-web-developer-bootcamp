/**
 * 
 * You have an array of objects in JavaScript. Each one contains a name (a string) and ranking (a number). 
 * Write two functions, one to return the objects ordered by ranking and another to return the average ranking.
 * 
 */

 arrObj = [{name: "test", ranking:2}, {name: "hh", ranking:3}, {name: "test2", ranking:5}, {name: "test3", ranking:4},
 {name: "test4", ranking:0}, {name: "test5", ranking:10}];

 function orderedByRanking(arrObj){
    return arrObj.sort((a,b) => a.ranking < b.ranking);
 }

 function averageRanking(arrObj){
     let arrLength = arrObj.length;
     return Math.floor(arrObj.reduce((acc, next)=>{
         acc+= next.ranking;
         return acc;
     },0)/arrLength)     
 }