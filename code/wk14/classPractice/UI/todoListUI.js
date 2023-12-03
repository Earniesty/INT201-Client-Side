function showTodoItem(newId, newDescription) {
    const newItem = document.createElement('div')
    newItem.setAttribute('class', 'todoItem')
    newItem.setAttribute('id', newId)

    const descElement = document.createElement('p')
    descElement.innerHTML = newDescription

    const statusBtn = document.createElement('button')
    statusBtn.innerHTML = 'Not Done'

    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'Remove'

    newItem.appendChild(descElement)
    newItem.appendChild(statusBtn)
    newItem.appendChild(removeBtn)

    const divList = document.getElementById('listTodo')
    divList.appendChild(newItem)
}

function showNumberOfDone(numberOfDone) {
    const doneParam = document.getElementById('done')
    doneParam.innerHTML = `Number of Done: ${numberOfDone}`
}

function showNumberOfNotDone(numberOfNotDone) {
    const doneParam = document.getElementById('notDone')
    doneParam.innerHTML = `Number of Not Done: ${numberOfNotDone}`
}

function removeTodoItem(removeId) {
    const removeItem = document.getElementById(removeId)
    const listItem = document.getElementById('listTodo')
    listItem.removeChild(removeItem)
}

export {
    showTodoItem,
    showNumberOfDone,
    showNumberOfNotDone,
    removeTodoItem
}