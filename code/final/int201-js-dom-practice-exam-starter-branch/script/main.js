// Good luck on JING write your code here
const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"]
const sectionRainbow = document.getElementById('rainbow')
const rainbowBtn = document.getElementById('color-btn')
rainbowBtn.addEventListener('click', () => {
    const rand = Math.floor(Math.random() * 5)
    sectionRainbow.style.backgroundColor = colorArray[rand]
})

// sally item
import { sallyBackpack, monitorBackPack } from "./sally.js"
const sallyManageHerBackPack = sallyBackpack()
const monitor = monitorBackPack()

function removeHandler(event) {
    const removeBtn = event.target.parentNode.parentNode
    const removeId = removeBtn.getAttribute('id')
    monitor.removeItem(removeId)
    sallyManageHerBackPack.removeItem(Number(removeId))
}

function addBtnHandler(itemId) {
    const item = document.getElementById(itemId).querySelector('.container')
    item.children[3].addEventListener('click', removeHandler)
}

const addItemBtn = document.getElementById('add-btn')
const inputItem = document.getElementById('item-input')
addItemBtn.addEventListener('click', () => {
    const itemName = inputItem.value.trim()
    if (itemName.length !== 0 && itemName) {
        const id = sallyManageHerBackPack.addItem(itemName)
        const amount = sallyManageHerBackPack.getItemAmount(id)
        monitor.hideError()
        if (amount > 1) monitor.updateAmount(id, amount)
        else {
            monitor.showItem(id, itemName, amount)
            addBtnHandler(id)
        }
        inputItem.value = ''
    } else {
        monitor.showError()
    }
})

// register
import { validateUsername, validateEmail, validatePassword } from "./validate.js"
function chaeckInput(username, email, password) {
    if (!validateUsername(username)) return 'Username is invalid, make sure to contain uppercase, number, and not special character'
    if (!validateEmail(email)) return 'This is not Email format! Contain @ and .com'
    if (!validatePassword(password)) return 'Password is invalid make sure to contain uppercase, lowercase, number and special character'
    return 'Successfully!!! Yay'
}

const inputForm = document.querySelector('.form')

function loadLogin() {
    const loginSession = sessionStorage.getItem('loginData')
    const loginData = JSON.parse(loginSession)
    const headingLogin = document.getElementById('input-list').querySelector('h1')
    if (Object.keys(loginData).length === 0) headingLogin.textContent = 'Please enter your information'
    else headingLogin.textContent = `Welcome, ${loginData.username}`
}

window.addEventListener('beforeunload', (event) => {
    event.preventDefault()
    sessionStorage.setItem('backpacks', JSON.stringify(sallyManageHerBackPack.getItemInBackPack()))
    sallyManageHerBackPack.claerBackPack()
})

window.addEventListener('load', loadLogin)
inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = inputForm.querySelector('input[placeholder="username"]').value.trim()
    const email = inputForm.querySelector('input[placeholder="email"]').value.trim()
    const password = inputForm.querySelector('input[placeholder="password"]').value.trim()
    // const username = inputForm.children[1].value.trim()
    // const email = inputForm.children[2].value.trim()
    // const password = inputForm.children[3].value.trim()
    
    const errorBox = inputForm.querySelector('.error')
    errorBox.textContent = chaeckInput(username, email, password)

    if (chaeckInput(username, email, password) === 'Successfully!!! Yay') {
        const loginData = {
            username,
            email,
            password
        }

        sessionStorage.setItem('loginData', JSON.stringify(loginData))
        loadLogin()
    }
})