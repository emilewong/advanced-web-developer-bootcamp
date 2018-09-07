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