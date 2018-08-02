var next = document.querySelector('#btn');
var email = document.querySelector('#email');
var avatar = document.querySelector('#avatar');
var fullname = document.querySelector('#fullname');
var username = document.querySelector('#username');
var city = document.querySelector('#city');
var url = "https://randomuser.me/api/"

next.addEventListener('click', function(){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)

});

function handleErrors(res){
    if (!res.ok){
        throw Error(res.status);
    }
    return res;
}

function parseJSON(response){
    
    return response.json()
    .then(function(parsedData) {
        return parsedData.results[0];
    });
}

function updateProfile(data){
    email.innerText = data.email;
    avatar.src = data.picture.medium;
    fullname.innerText = data.name.first + " " + data.name.last;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
}

function printError(error){
    console.log(error);
}