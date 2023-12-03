import { Todo } from "./todo.js"

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
        todos = todos.filter(({id}) => id != removeId)
    }

    function getTodos() {
        return todos
    }

    function getNumberOfDone() {
        return todos.filter(({done}) => done).length
    }

    function getNumberOfNotDone() {
        return todos.filter(({done}) => !done).length
    }

    function setItemToDone(doneId) {
        const todo = findTodo(doneId)
        todo.setDone(true)
    }

    function clearTodo() {
        todos = []
        // todos = todos.splice(0, todos.length)
    }

    function loadTodos(userTodos) {
        let lastId = 0
        userTodos.forEach((todo) => {
            todos.push(new Todo(Number(todo.id), todo.description, !!todo.done))
            lastId = todos[todos.length-1].id
        })

        Todo.runningId = lastId + 1
    }

    return {
        addTodo,
        findTodo,
        findIndexTodo,
        removeTodo,
        getTodos,
        getNumberOfDone,
        getNumberOfNotDone,
        setItemToDone,
        loadTodos,
        clearTodo
    }
}

export {todoListManagement}