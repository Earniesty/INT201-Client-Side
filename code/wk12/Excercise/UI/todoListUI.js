function showTodoItem(newId, newDescription) {
    const newDivElement = document.createElement('div')
    newDivElement.setAttribute('class', 'todoItem')
    newDivElement.setAttribute('id', newId)

    const descElement = document.createElement('p')
    descElement.innerHTML = newDescription

    const statusBtn = document.createElement('button')
    statusBtn.innerHTML = 'Not done'

    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'remove'

    newDivElement.appendChild(descElement)
    newDivElement.appendChild(statusBtn)
    newDivElement.appendChild(removeBtn)
    
    const divParent = document.getElementById('listTodo')
    divParent.appendChild(newDivElement)
}

function showNumberOfDone(numberOfDone) {
    const doneParam = document.querySelector('#done')
    doneParam.innerHTML = `Number of Done: ${numberOfDone}`
}

function showNumberOfNotDone(numberOfNotDone) {
    const notDoneParam = document.querySelector('#notDone')
    notDoneParam.innerHTML = `Number of Not Done: ${numberOfNotDone}`
}

function removeTodoItem(removeId) {
    const removeElement = document.getElementById(removeId)
    const divParent = document.getElementById('listTodo')
    divParent.removeChild(removeElement)
}

export {showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem}