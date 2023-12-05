import { Todo } from "../../../wk14/classPractice/lib/todo"

class SallyItem {
    static nextId = 1

    constructor(id, itemName, amount) {
        if (!itemName) {
            itemName = id
            id = undefined
        }
        this.id = id ? id : SallyItem.nextId++
        this.itemName = itemName
        this.amount = amount ? amount : 1
    }

    getItemName() {
        return this.itemName
    }
    
    addAlreadyItem() {
        this.amount++
    }

    setItemName(itemName) {
        this.itemName = itemName
    }

    getAmount() {
        return this.amount
    }
}

function sallyBackpack() {
    const backpacks = []
    const capacity = 20

    function addItem(itemName) {
        let findAlreadyItem = backpacks.find(({itemName:nameInPack}) => 
            nameInPack.toLowerCase() === itemName.toLowerCase())
        if (backpacks.length >= capacity) return `backpack full!!!`
        if (!findAlreadyItem) {
            findAlreadyItem = new SallyItem(itemName)
            backpacks.push(findAlreadyItem)
        }
        else findAlreadyItem.addAlreadyItem()
        return findAlreadyItem.id
    }

    function editItemName(itemId, newName) {
        const item = backpacks.find(({id}) => id == itemId)
        item.setItemName(newName)
    }

    function removeItem(removeId) {
        backpacks = backpacks.filter(({id}) => id != removeId)
    }

    function findItem(itemId) {
        return backpacks.find(({id}) => id == itemId)
    }

    function findIndexItem(itemId) {
        return backpacks.findIndex(({id}) => id == itemId)
    }

    function getItemInBackPack() {
        return backpacks
    }

    function getItemAmount(amountId) {
        return findItem(amountId).getAmount()
    }

    function claerBackPack() {
        backpacks = []
    }

    function loadItem(listItem) {
        let lastId = 0
        listItem.forEach(item => {
            backpacks.push(new SallyItem(Number(item.id), item.itemName, Number(item.amount)))
            lastId = backpacks[backpacks.length - 1].id
        })
        SallyItem.nextId = lastId + 1
    }

    return {
        addItem,
        editItemName,
        removeItem,
        findItem,
        findIndexItem,
        getItemInBackPack,
        getItemAmount,
        loadItem,
        claerBackPack
    }
}

function monitorBackPack() {
    function showItem(newId, newItemName, amount) {
        const sallyListBox = document.getElementById('listItem').querySelector('ul')

        const newItem = document.createElement('li')
        newItem.setAttribute('class', 'item')
        newItem.setAttribute('id', newId)

        const container = document.createElement('div')
        container.setAttribute('class', 'container')

        const nameItem = document.createElement('p')
        nameItem.textContent = `${newItemName}: =>`

        const amountParam = document.createElement('p')
        amountParam.textContent = `x${amount} ::`

        const editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'

        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove'

        container.appendChild(nameItem)
        container.appendChild(amountParam)
        container.appendChild(editBtn)
        container.appendChild(removeBtn)

        newItem.appendChild(container)

        sallyListBox.appendChild(newItem)
    }

    function updateAmount(itemId, amount) {
        const amountParam = document
                                .getElementById(`${itemId}`)
                                .querySelector('div')
                                .childNodes[1]
        amountParam.textContent = `x${amount} ::`
    }

    function showError() {
        const errorMonitor = document.getElementById('backpack').querySelector('.error')
        errorMonitor.textContent = 'Invalid Item'
    }

    function hideError() {
        const errorMonitor = document.getElementById('backpack').querySelector('.error')
        errorMonitor.textContent = ''
    }

    function removeItem(removeId) {
        const removeItem = document.getElementById(removeId)
        const listItem = document.getElementById('listItem').querySelector('ul')
        listItem.removeChild(removeItem)
    }

    return {
        showItem,
        updateAmount,
        showError,
        hideError,
        removeItem
    }
}

export { sallyBackpack, monitorBackPack }