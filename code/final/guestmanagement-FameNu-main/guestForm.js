// 65130500066 ภูวเมศฐ์ ปัญจเฉลิมรัตน์
// import { createGuestList } from './data/guestdata.js'
const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const inputBox = document.getElementById('search-input')
    const addGuestBtn = document.getElementById('add-guest-btn')
    addGuestBtn.addEventListener('click', addGuest)
    inputBox.addEventListener('keyup', searchGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    console.log(guestItem)
    const displayBox = document.getElementById('display-area')

    const guestBox = document.createElement('div')
    const {firstname, lastname} = guestItem
    const nameBox = document.createElement('span')
    const markBox = document.createElement('span')

    nameBox.innerHTML = `${firstname} ${lastname}`

    markBox.setAttribute('class', 'remove-icon')
    markBox.setAttribute('id', `${firstname}-${lastname}`)
    markBox.style = 'cursor:pointer;color:red;'
    markBox.innerHTML = '[X]'
    markBox.addEventListener('click', removeGuest)

    guestBox.appendChild(nameBox)
    guestBox.appendChild(markBox)

    displayBox.appendChild(guestBox)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const displayBox = document.getElementById('display-area')
    displayBox.textContent = ''
    guestResult.forEach((guest) => {
      displayGuest(guest)
    })
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const keyword = event.target.value
    const searchGuestFromKeyword = guests.searchGuests(keyword)
    displayGuests(searchGuestFromKeyword)
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstNameInput = document.getElementById('firstname-input')
    const lastNameInput = document.getElementById('lastname-input')
    
    const firstName = firstNameInput.value.trim()
    const lastname = lastNameInput.value.trim()
    const guest = guests.addNewGuest(firstName, lastname)
    displayGuest(guest[guest.length - 1])
    firstNameInput.value = ''
    lastNameInput.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {  
    const getIdGuest = event.target.id
    const splitId = getIdGuest.split('-')
    const firstname = splitId[0]
    const lastname = splitId[1]
    const thatGuset = {firstname, lastname}
    guests.removeGuest(thatGuset)
    displayGuests(guests.getAllGuests())
    console.log(guests.getAllGuests())
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
module.exports = guestForm
// export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())
