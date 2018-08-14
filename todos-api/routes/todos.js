var express = require('express');
var router = express.Router();
var db = require('../models')

router.get('/', function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});

router.post('/', function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
       res.send(err);
    })
});

router.get('/:todoId', function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

router.put('/:todoId', function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todoUpdated){
        res.json(todoUpdated);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.delete('/:todoId', function(req, res){
    db.Todo.findOneAndRemove({_id: req.params.todoId})
    .then(function(deletedTodo){
        res.json(deletedTodo);
    })
    .catch(function(err){
        res.send(err);
    })

});

module.exports = router;