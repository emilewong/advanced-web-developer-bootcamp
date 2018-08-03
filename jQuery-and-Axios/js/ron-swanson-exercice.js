var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector('#quote');
var xhrbtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var jquerybtn = document.querySelector("#jquery");
var axiosbtn = document.querySelector("#axios");

/* XHR request */
if(xhrbtn){
    xhrbtn.addEventListener("click", function(){
        var XHR = new XMLHttpRequest();    
        XHR.onreadystatechange = function(){
            if(XHR.readyState == 4 && XHR.status == 200){
                data = JSON.parse(XHR.responseText);
                quote.innerText = data[0];
            }
        }
        XHR.open('GET',url);    
        XHR.send();    
    });  
}
/* Fetch request */
fetchbtn.addEventListener('click', function(){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateQuote)
    .catch(printError)
});

function handleErrors(response){
    if(!response.ok){
        throw Error (response.status);       
    }
    return response;
}
function parseJSON(response){
    return response.json()
    .then(function (parsedDate){
        return parsedDate[0];
    })
}
function updateQuote(data){
    quote.innerText = data;
}
function printError(){
    console.log(Error);
}
/* Jquery request */
$('#jquery').click(function(){
    $.getJSON(url)
    .done(function(data){
        console.log(data[0]);
        $('#quote').text(data[0]);
    })
    .fail(function(){
        console.log("error");
    })
})
/* Axios request */
if(axiosbtn){
    axiosbtn.addEventListener("click", function(){
       axios.get(url)
       .then(function(response){
           var data = response.data[0];
           quote.innerText = data;          
       })
       .catch(function(error){
           console.log(error);
       })    
})

}