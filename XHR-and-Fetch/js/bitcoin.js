var btn = document.querySelector("button");
var price = document.querySelector("#price");

btn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            data = JSON.parse(XHR.responseText).bpi.EUR.rate;
            price.innerText = data +" EUR";
        }
    }
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});