/* global $ */
$(document).ready(function(){
    $.getJSON('/api/todos')
        .then(addTodos)
        .catch(function(err){
            console.log(err);
        })
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    });

    $('.list').on('click', 'span', function(){
        
    });
});

function addTodos(todos){
    //adding todos to the page
    todos.forEach(function(todo){
        addTodo(todo);
    });

}

function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id);   
    if(todo.completed){
            newTodo.addClass('done');
        }
        $('.list').append(newTodo);
}

function createTodo(){
    //send request to create new todo
    var userInput = $('#todoInput').val();
    $.post('api/todos', {name: userInput} )
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}