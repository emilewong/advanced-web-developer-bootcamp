var express = require('express')
    app = express()
    port = process.env.PORT || 8080
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send('server working, this is the index page');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("Server started at port : "+ port);
});