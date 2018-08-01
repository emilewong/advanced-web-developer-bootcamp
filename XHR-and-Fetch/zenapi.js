var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
    if(XHR.readyState == 4){
        console.log(XHR.responseText);
    } 
}
XHR.open("GET", "https://api.github.com/zen");
XHR.send();