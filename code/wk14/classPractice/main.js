// import { todoListManagement } from "./lib/todoManagement.js"
// import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from "../../wk12/Excercise/UI/todoListUI.js"

// const management = todoListManagement()

// management.addTodo('Phing')
// management.addTodo('GO')
// management.addTodo('Fame')
// management.addTodo('YoYo')
// management.findTodo(1).setDone(true)

// management.getTodos().forEach((todo) => {
//     showTodoItem(todo.id, todo.description)
// })

// showNumberOfDone(management.getNumberOfDone())
// showNumberOfNotDone(management.getNumberOfNotDone())

import { loadHandler, beforeUnloadHandler } from "./eventHandler/eventController.js"

// loadHandler()
window.addEventListener('load', loadHandler)
window.addEventListener('beforeunload', beforeUnloadHandler)
