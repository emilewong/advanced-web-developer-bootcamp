var num = 0;
var intervalId = setInterval(function(){
    num++;
    console.log("num: ", num);
    if (num === 10){
        clearInterval(intervalId);
    }
}, 1000);