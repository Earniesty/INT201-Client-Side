class Todo {
    static runningId = 1

    constructor(id, description, done = false) {
        if (!description) {
            description = id
            id = undefined
        }
        this.id = id ? id : Todo.runningId++
        this.description = description
        this.done = done
    }

    getTodo() {
        return {id, description}
    }

    setDescription(newDescription) {
        this.description = newDescription
    }

    setDone(done) {
        this.done = done
    }
}

export {Todo}