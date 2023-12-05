class Todo {
    static runningId = 1

    constructor(id, description, done = false) {
        if (!description) {
            description = id
            id = undefined
        }
        this.id = id ? id : Todo.runningId++
        this.description = description // Stirng 
        this.done = done // boolean
    }

    getTodo() {
        return `{${this.id}, ${this.description}}`
    }

    setDescription(newDescription) {
        this.description = newDescription
    }

    setDone(done) {
        this.done = done
    }
}

// module.exports = {Todo}
export {Todo}