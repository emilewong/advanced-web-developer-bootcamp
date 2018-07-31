function findIndex(arr, callback){
    for(var i=0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            console.log (i);
            return i;
        }
      
    }
    return -1;
}

