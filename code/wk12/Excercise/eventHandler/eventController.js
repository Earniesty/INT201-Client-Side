import { todoListManagement } from "../lib/todoManagement.js"
import { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } from "../UI/todoListUI.js"

let management = null

function loadHandler() {
    if (!management) {
        management = todoListManagement()

        const storedTodos = localStorage.getItem('todos')
        if (storedTodos) {
            const todos = JSON.parse(storedTodos)
            management.loadTodos(todos)
        }
    }

    const todos = management.getTodos()
    todos.forEach((todo) => {
        showTodoItem(todo.id, todo.description)
        const todoItem = document.getElementById(todo.id)
        const statusBtn = todoItem.querySelector('button')
        if (todo.done) {
            statusBtn.style.backgroundColor = 'green'
            statusBtn.style.color = 'white'
            statusBtn.textContent = 'Done'
        }
    })

    updatePage()
    addTodoHandler()
    notDoneButtonHandler()
    removeButtonHandler()
}

function beforeUnloadHandler(event) {
    event.preventDefault()
    const todos = management.getTodos()
    localStorage.setItem('todos', JSON.stringify(todos))
    management.clearTodo()
}

function addTodoHandler() {
    // updatePage()
    const addButton = document.getElementById('addBtn')
    addButton.addEventListener('click', () => {
        const inputBox = document.querySelector('#addTodo>input')
        const description = inputBox.value.trim()

        if (description) {
            const lastedId = management.addTodo(description)
            updatePage()
            showTodoItem(lastedId, description)
            inputBox.value = ''

            // const getAllTodoItemUI = document.querySelectorAll('#listTodo>.todoItem')
            // console.log(getAllTodoItemUI)
        }
    })
}

function notDoneButtonHandler() {
    const listTodo = document.getElementById('listTodo')
    listTodo.addEventListener('click', (event) => {
        const textInElement = event.target.textContent
        if (textInElement === 'Not done') {
            const todoID = event.target.parentNode.id
            management.setItemToDone(todoID)

            const thisButton = event.target
            // add style to button element
            thisButton.style.backgroundColor = 'green'
            thisButton.style.color = 'white'
            thisButton.textContent = 'Done'

            updatePage()
        }
    })
}

function removeButtonHandler() {
    const listTodo = document.getElementById('listTodo')
    listTodo.addEventListener('click', (event) => {
        const textInElement = event.target.textContent
        if (textInElement === 'remove') {
            const todoID = event.target.parentNode.id
            management.removeTodo(todoID)
            removeTodoItem(todoID)
            updatePage()
        }
    })
}

function updatePage() {
    showNumberOfDone(management.getNumberOfDone())
    showNumberOfNotDone(management.getNumberOfNotDone())
}

// export {addTodoHandler, notDoneButtonHandler, removeButtonHandler}
export {loadHandler, beforeUnloadHandler}