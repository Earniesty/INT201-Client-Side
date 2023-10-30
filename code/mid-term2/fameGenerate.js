// Task Management
class Task { // id, name, description, priority(1-3), dueDate, completed
    static nextId = 0
    constructor (name = nextId + 1, description = null, priority = 3, dueDate = null, completed = false) {
        this.id = ++Task.nextId
        this.name = name
        this.description = description
        this.priority = priority
        this.dueDate = dueDate
        this.completed = completed
    }
}

function TaskManager() {
    let tasks = []

    function addTask(name, description, priority, dueDate, completed) {
        const task = new Task(name, description, priority, dueDate, completed)
        return tasks.push(task)
    }

    function removeTask(removeId) {
        const removeIndex = tasks.findIndex(({id}) => id === removeId)
        if (removeIndex >= 0) tasks.splice(removeIndex, 1)
    }

    function listTasks() {
        return tasks
    }

    function compareDate({dueDate:lDate}, {dueDate:rDate}) {
        if (lDate < rDate) return -1
        if (lDate > rDate) return 1
        return 0
    }

    function listTaskByDate() {
        return tasks.sort(compareDate)
    }

    function listTaskByPriority() {
        return tasks.sort((a, b) => a.priority - b.priority)
    }

    function listComplete(check) {
        return tasks
            .filter(({completed}) => completed === check)
            .sort(compareDate)
    }

    return {
        addTask,
        removeTask,
        listTasks,
        listTaskByDate,
        listTaskByPriority,
        listComplete
    }
}

let management = TaskManager()
// add task to manager
management.addTask('Go to Dream World', 'visit on BKK')
management.addTask('Go to Siam', 'visit at BTS', 1, '23-10-2022', true)
console.log(management.listTasks())
console.log('sort by priority')
console.log(management.listTaskByPriority())
console.log('sort by date')
console.log(management.listTaskByDate())
console.log('Check false')
console.log(management.listComplete(false))