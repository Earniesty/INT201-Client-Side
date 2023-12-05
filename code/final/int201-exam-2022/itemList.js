// import { products } from './data/products.js'
const products = require('./data/products.js')

function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const inputBox = document.querySelector('input')
    inputBox.addEventListener('input', filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = () => {
    const inputBox = document.querySelector('input')
    const findArrayFromInput = items.filter((item) => 
      item.keywords.toLowerCase().includes(inputBox.value.toLowerCase())
    )
    showItems(findArrayFromInput)
  }

  const showItems = (items) => {
    const getItems = items
    const idOfListBox = 'items'
    const listBox = document.getElementById(idOfListBox)
    listBox.innerHTML = ''
    getItems.forEach((item) => {
      const itemBox = document.createElement('li')
      itemBox.innerHTML = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`
      listBox.appendChild(itemBox)
    })
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}

// export { itemList }
module.exports = itemList 
// const { initialPage, filterItemsHandler, showItems } = itemList(products)
// initialPage()

