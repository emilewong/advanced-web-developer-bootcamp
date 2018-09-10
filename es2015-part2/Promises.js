//jquery returned promise from API call and chained

$.getJSON('https://omdbapi.com?t=equalizer&apikey=thewdb')
.then(function(movie){
	years.push(movie.year);
	return $.getJSON('https://omdbapi.com?t=cobra&apikey=thewdb');
})
.then(function(movie){
	years.push(movie.Year);
	console.log(years);
})
console.log('ALL DONE!');

//Promise.all, resolve all promises or reject if a single promise is rejected(fail fast).

//ES2015 Promises Assignment
/*
    1. Write a function called getMostFollowers, which accepts a variable number of arguments. 
    You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) 
    to get the name and number of followers of each argument. 
    The function should return a promise, which when resolved, returns a string which displays the username who has the most followers.
    Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.
    
    getMostFollowers('elie','tigarcia','colt').then(function(data){
        console.log(data)
    });
 
        "Colt has the most followers with 424" 
*/
function getMostFollowers(...args){
    let basUrl = "https://api.github.com/users/";
    let urls = args.map(username => $.getJSON(basUrl + username));
    return Promise.all(urls).then(function(data){
        let max = data.sort((a,b) => a.followers < b.followers)[0];
        return `${max.name} has the most followers with ${max.followers}`
    })    
}

/** 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) 
 * to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log 
 * the name of the character.

starWarsString(1).then(function(data){
    console.log(data)
})
 
"Luke Skywalker"
Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise 
that when resolved will console.log the name of the character and the film they are featured in 

starWarsString(1).then(function(data){
    console.log(data)
})
 
"Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that the film contains. 
Your function should return a promise that when resolved will console.log the name of the character and 
the film they are featured in and the name of the planet. 

starWarsString(1).then(function(data){
    console.log(data)
})
 
"Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth" */

function starWarsString(num){
    var str='';
    return $.getJSON(`https://swapi.co/api/people/${num}/`).then(function(data){
        str += `${data.name} is featured in `;    
        var filmApi = data.films[0];
        return $.getJSON(filmApi);

    })
    .then(function(result){
        str += `${result.title}, directed by ${result.director} and it takes place on `
        var placeApi = result.planets[0];
        return $.getJSON(placeApi);
    })
    .then(function(place){
        str += place.name;
        return str;
    })
    .then(function(finalString){
        return finalString;
    })
}