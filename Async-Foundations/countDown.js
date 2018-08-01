var t = 3;
function countDown(t){
    var intervall = setInterval(function(){
        t--;
        if(t > 0){
            
            console.log('Timer: ', t);
        } 
        if (t === 0){
            console.log('Ring Ring Ring!!!');
            clearInterval(intervall);
        }       
               
        
    },t*1000 );

}
    
    
