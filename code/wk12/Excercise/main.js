// import { todoListManagement } from "./lib/todoManagement.js"
// import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from "./UI/todoListUI.js"
// import { addTodoHandler, notDoneButtonHandler, removeButtonHandler } from "./eventHandler/eventController.js"
import { loadHandler, beforeUnloadHandler } from "./eventHandler/eventController.js"

window.addEventListener('load', loadHandler)
window.addEventListener('beforeunload', (event) => {
    beforeUnloadHandler(event)
})

// addTodoHandler()
// notDoneButtonHandler()
// removeButtonHandler()

// const notDoneButton = document.querySelector('#1')
// notDoneButton.addEventListener('click', (event) => {
//     console.log(event)
// })
// const management = todoListManagement()
// management.addTodo('Play Piano')
// management.addTodo('Play Guitar')
// management.addTodo('Play Tennis')

// let todos = management.getTodos()
// todos.forEach(({id, description}) => {
//     showTodoItem(id, description)
// })

// showNumberOfDone(management.getNumberOfDone())
// showNumberOfNotDone(management.getNumberOfNotDone())
