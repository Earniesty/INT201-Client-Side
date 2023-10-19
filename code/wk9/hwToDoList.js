class Todo {
    // static nextId = 0
    // constructor(description) {
    constructor(id, description) {
        this.id = id // ++nextId
        this.description = description
    }

    getTodo() {
        return {id: this.id, description: this.description}
    }

    setDescription(newDescription) {
        this.description = newDescription
    }
}

function todoManagemnet() {
    let todos = []

    function addTodo(desc) {
        const id = todos.length + 1
        const todo = new Todo(id, desc)
        // if use static on class Todo
        return todos.push(todo)
        // return todos.push(todo.getTodo())
    }

    function findTodo(searchId) {
        // for (let todo of todos) {
        //     if (todo.id === searchId) return todo
        // }
        // return `Id:${searchId} not found`
        return todos.find(({id}) => id === searchId)
    }

    function findIndexTodo(searchId) {
        // for (let i = 0; i < todos.length; i++) {
        //     if (todos[i]['id'] === searchId) return i
        // }
        // return -1
        return todos.findIndex(({id}) => id === searchId)
    }

    function removeTodo(removeId) {
        // s1 // after replace on todos, get new address
        // todos = todos.filter(({id}) => id !== removeId) 

        // s2 // same address of todos before splice, just remove element
        const index = findIndexTodo(removeId) // if not found, index = -1
        if (index >= 0) {
            const removeElement = todos.splice(index, 1)
            const {id, description:desc} = removeElement[0]
            console.log('Remove -> id:' + id + ', description:' + desc)
        }
        else console.log(`Id:${removeId} not found`)
    }

    function getTodos() {
        return todos
    }

    return {
        addTodo,
        findTodo,
        findIndexTodo,
        removeTodo,
        getTodos
    }
}

// only class Todo
const todoOne = new Todo(1, 'Good guy')
console.log(todoOne)
console.log(typeof todoOne)
console.log(todoOne.getTodo())
todoOne.setDescription('Hello, Guy')
console.log(todoOne.getTodo())

// Todo in management
const manageTodo = todoManagemnet()
console.log(manageTodo.addTodo('Hello world'))
console.log(manageTodo.addTodo('Play Game'))
console.log(manageTodo.getTodos())

// find
console.log(manageTodo.findTodo(3))

// findIndex
console.log(manageTodo.findIndexTodo(1))
console.log(manageTodo.addTodo('Play Basketball'))
console.log(manageTodo.getTodos())

// remove
manageTodo.removeTodo(2)
manageTodo.removeTodo(4)
console.log(manageTodo.getTodos())

// set new description
manageTodo.getTodos()[manageTodo.findIndexTodo(1)]