var express = require('express')
    app = express();
    app.get('/', function(req, res){
        res.send('server working, this is the index page');
    });

    app.listen(8080, function(){
        console.log("Server started at port : 8080");
    });