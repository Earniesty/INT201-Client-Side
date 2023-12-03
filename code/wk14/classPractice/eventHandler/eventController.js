import { todoListManagement } from "../lib/todoManagement.js"
import { showNumberOfDone, showTodoItem, showNumberOfNotDone, removeTodoItem } from "../UI/todoListUI.js"

const management = todoListManagement()

function loadHandler() {
    const loadTodos = localStorage.getItem('todos')
    const todos = JSON.parse(loadTodos)

    if (todos?.length !== 0 && todos !== null && todos !== undefined) {
        management.loadTodos(todos)
        management.getTodos().forEach((todo) => {
            showTodoItem(todo.id, todo.description)
            addButtonHandler(todo.id)
            if (todo.done) {
                const doneBtn = document.getElementById(todo.id).children[1]
                doneBtn.textContent = 'Done'
                doneBtn.style = 'background-color: green; color: white'
            }
        })
    }
    updatePage()
    const addBtn = document.getElementById('addBtn')
    const inputBox = document.querySelector('#addTodo>input')

    addBtn.addEventListener('click', addTodoHandler)
    inputBox.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTodoHandler()
    })
}

function beforeUnloadHandler(evnet) {
    evnet.preventDefault()
    localStorage.setItem('todos', JSON.stringify(management.getTodos()))
    management.clearTodo()
}

function addTodoHandler() {
    const description = document.querySelector('#addTodo>input').value.trim()
    if (description && description.length !== 0) {
        const idNewItem = management.addTodo(description)
        showTodoItem(idNewItem, description)
        addButtonHandler(idNewItem)
        document.querySelector('#addTodo>input').value = ''
        updatePage()
    }
}

function addButtonHandler(todoID) {
    const todoItem = document.getElementById(todoID)
    todoItem.children[1].addEventListener('click', notDoneButtonHandler)
    todoItem.children[2].addEventListener('click', removeButtonHandler)
}

function notDoneButtonHandler(event) {
    const todoItem = event.target
    todoItem.textContent = 'Done'
    todoItem.style = 'background-color: green; color: white'
    management.setItemToDone(todoItem.parentNode.id)
    updatePage()
}

function removeButtonHandler(event) {
    const removeBtn = event.target
    const removeId = removeBtn.parentElement.getAttribute('id')
    removeTodoItem(removeId)
    management.removeTodo(Number(removeId))
    updatePage()
}

function updatePage() {
    showNumberOfDone(management.getNumberOfDone())
    showNumberOfNotDone(management.getNumberOfNotDone())
}

export {
    loadHandler, beforeUnloadHandler
}
