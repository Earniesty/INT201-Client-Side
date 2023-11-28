import { Todo } from "./todo.js"
// const {Todo} = require('./todo.js')

function todoListManagement() {
    let todos = []

    function addTodo(desc) {
        const todo = new Todo(desc)
        todos.push(todo)
        return todo.id
    }

    function findTodo(searchId) {
        return todos.find(({id}) => id == searchId)
    }

    function findIndexTodo(searchId) {
        return todos.findIndex(({id}) => id == searchId)
    }

    function removeTodo(removeId) {
        todos = todos.filter((todo) => todo.id != removeId)
    }

    function getTodos() {
        return todos
    }

    function getNumberOfDone() {
        return (todos.filter(({done}) => done)).length
    }

    function getNumberOfNotDone() {
        return (todos.filter(({done}) => !done)).length
    }

    function clearTodo() {
        todos.splice(0, todos.length)
    }

    function setItemToDone(doneId) {
        todos.forEach((todo) => {
            if (todo.id == doneId) {
                todo.setDone(true)
            }
        })
    }

    function loadTodos(userTodos) {
        todos = [...userTodos]
    }

    return {
        addTodo,
        findTodo,
        findIndexTodo,
        removeTodo,
        getTodos,
        getNumberOfDone,
        getNumberOfNotDone,
        clearTodo,
        setItemToDone,
        loadTodos
    }
}

// const management = todoListManagement()
// console.log(management.addTodo('Play Piano'))
// console.log(management.addTodo('Play Guitar'))
// console.log(management.addTodo('Play Tennis'))
// console.log(management.getTodos())
// console.log(management.getNumberOfDone())
// console.log(management.getNumberOfNotDone())

export {todoListManagement}