// 65130500066 ภูวเมศฐ์ ปัญจเฉลิมรัตน์
import { createGuestList } from './data/guestdata.js'
// const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const inputBox = document.getElementById('search-input')
    const addGuestBtn = document.getElementById('add-guest-btn')

    inputBox.addEventListener('keyup', searchGuest)
    addGuestBtn.addEventListener('click', addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const firstname = guestItem.firstname
    const lastname = guestItem.lastname
    const divParent = document.createElement('div')
    const spanName = document.createElement('span')
    const spanRemove = document.createElement('span')
    spanName.textContent = `${firstname} ${lastname}`

    spanRemove.textContent = '[X]'
    spanRemove.addEventListener('click', removeGuest)
    spanRemove.setAttribute('class', 'remove-icon')
    spanRemove.style = 'cursor:pointer;color:red'
    spanRemove.setAttribute('id', `${firstname}-${lastname}`)

    divParent.appendChild(spanName)
    divParent.appendChild(spanRemove)

    const divDisplay = document.getElementById('display-area')
    divDisplay.appendChild(divParent)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const divDisplay = document.getElementById('display-area')
    divDisplay.innerHTML = ''
    guestResult.forEach((guestItem) => {
      displayGuest(guestItem)
    })
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const keyword = event.target.value
    const guestResult = guests.searchGuests(keyword)
    displayGuests(guestResult)
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstnameBox = document.getElementById('firstname-input')
    const lastnameBox = document.getElementById('lastname-input')
    const firstname = firstnameBox.value
    const lastname = lastnameBox.value
    guests.addNewGuest(firstname, lastname)
    displayGuest({firstname, lastname})
    firstnameBox.value = ''
    lastnameBox.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {  
    const fullname = event.target.id.split('-')
    const firstname = fullname[0]
    const lastname = fullname[1]
    const thatGuest = {firstname, lastname}
    guests.removeGuest(thatGuest)
    // displayGuests(guests.getAllGuests())
    const divParent = event.target.parentElement
    const divDisplay = document.getElementById('display-area')
    divDisplay.removeChild(divParent)
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
