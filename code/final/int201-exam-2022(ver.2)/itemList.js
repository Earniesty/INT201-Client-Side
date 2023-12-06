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
    const inputBox = document.querySelector('input').value
    const filterItems = items.filter((
      {keywords}) => keywords.toLowerCase().includes(inputBox.toLowerCase())
    )
    showItems(filterItems)
  }

  const showItems = (items) => {
    const getItems = items
    const listBox = document.getElementById('items')
    listBox.innerHTML = ''
    for (const item of getItems) {
      const itemBox = document.createElement('li')
      itemBox.innerHTML = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`
      listBox.appendChild(itemBox)
    }
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

