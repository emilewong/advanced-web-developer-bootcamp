function* pauseAndReturnValues(num){
    for(let i=0; i<num ; i++){
        yield i;
    }
}
//run and pause part of function at a time, especially used with async code
//var gen = pauseAndReturnValues(5);
//gen.next(); //{value: 0, done: false}
//gen.next(); //{value: 1, done: false}
//gen.next(); //{value: 2, done: false}
//gen.next(); //{value: 3, done: false}
//gen.next(); //{value: 4, done: false}
//gen.next(); //{value: undefined, done: true}

//generator implement Symbol.iterator, we can use for of loop

function* printValues(){
    yield "First";
    yield "Second";
    yield "Third";
}

//async example

function* getMovieData(moviename){
    console.log('starting');
    yield $.getJSON(`https://omdbapi.com?t=${moviename}&apikey=thewdb`);
    console.log('ending');
}

//var movieGetter = getMovieData('titanic');
//movieGetter.next().value.then(val => console.log(val));