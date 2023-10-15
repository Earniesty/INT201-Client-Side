class Todo {
    constructor(id, description) {
        this.id = id
        this.description = description
    }

    getTodo() {
        return {id: this.id, description: this.description}
    }

    setDescription(description) {
        this.description = description
    }
}

function todoManagemnet() {
    let todos = []
    let nextId = 0

    function addTodo(desc) {
        const todo = new Todo(++nextId, desc)
        return todos.push(todo.getTodo())
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
        const index = findIndexTodo(removeId)
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

const todoOne = new Todo(1, 'Good guy')
console.log(todoOne)
console.log(todoOne.getTodo())
todoOne.setDescription('Hello, Guy')
console.log(todoOne.getTodo())

let manageTodo = todoManagemnet()
console.log(manageTodo.addTodo('Hello world'))
console.log(manageTodo.addTodo('Play Game'))
console.log(manageTodo.getTodos())
console.log(manageTodo.findTodo(3))
console.log(manageTodo.findIndexTodo(1))
console.log(manageTodo.addTodo('Play Basketball'))
console.log(manageTodo.getTodos())
manageTodo.removeTodo(2)
console.log(manageTodo.getTodos())