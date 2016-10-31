import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'
 var todos= []
 //console.log(todos)

 document.getElementById('putOnList').addEventListener('keypress', enter);

 document.getElementById('addButton').addEventListener('click', addToDo);

var addToDo = function() {
     var todoItem = document.getElementById('putOnList').value
     todos.push(todoItem)
     document.getElementById('putOnList').value = ''
     renderView(todos)
 }
function enter() {
     if (event.key === 'Enter') {
         addToDo()
     }
 }

 function renderView(todos) {
    ReactDOM.render(
        <Todos data={todos} />,
        document.getElementById('todos')
    )
}
