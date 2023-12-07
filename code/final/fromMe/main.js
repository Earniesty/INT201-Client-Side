import { manageUser } from "./manage/manageuser.js"
import { changeBGColor, changeFontColor, allToDefault, showSetting, hideSetting } from "./event/controller.js"
const manageUserBox = manageUser()
let dataUsers = manageUserBox.getDataUsers()

const usernameBox = document.getElementById('username')
const passwordBox = document.getElementById('password')

const inputBgColorBox = document.getElementById('backgroundColor')
const inputFontColorBox = document.getElementById('fontColor')

const formLoginBox = document.getElementById('login-form')
formLoginBox.addEventListener('submit', (event) => {
    event.preventDefault()

    const username = usernameBox.value
    const password = passwordBox.value

    dataUsers = manageUserBox.findUser(username)
    if (dataUsers) {
        if (dataUsers.user.password === password) {
            showWelcomeMsg(username)
            const userSetting = dataUsers.getSetting()
            changeBGColor(userSetting.getBgColor())
            changeFontColor(userSetting.getFontColor())
            showSetting()
            clearInput()
            hideLoginBtn()
            showLogOutBtn()
        } else {
            alert('Password wrong')
        }
    } else {
        dataUsers = manageUserBox.addUser(username, password)
        showWelcomeMsg(dataUsers.getUser().getUsername())
        changeBGColor(dataUsers.getSetting().getBgColor())
        changeFontColor(dataUsers.getSetting().getFontColor())
        showSetting()
        clearInput()
        hideLoginBtn()
        showLogOutBtn()
    }
    console.log(dataUsers)
    inputBgColorBox.addEventListener('input', () => {
        dataUsers.setSetting(inputBgColorBox.value, inputFontColorBox.value)
        changeBGColor(inputBgColorBox.value)
    })
    inputFontColorBox.addEventListener('input', () => {
        dataUsers.setSetting(inputBgColorBox.value, inputFontColorBox.value)
        changeFontColor(inputFontColorBox.value)
    })
})

const loginBtn = document.getElementById('loginBtn')
function showLoginBtn() {
    loginBtn.style.display = 'block'
}
function hideLoginBtn() {
    loginBtn.style.display = 'none'
}

const logoutBtn = document.getElementById('logoutBtn')
logoutBtn.addEventListener('click', () => {
    hideSetting()
    hideLogOutBtn()
    showLoginBtn()
    allToDefault()
    welcomeBox.style.display = 'none'
    clearInput()
})
function showLogOutBtn() {
    logoutBtn.style.display = 'block'
}
function hideLogOutBtn() {
    logoutBtn.style.display = 'none'
}

const welcomeBox = document.getElementById('welcomeMsg')
const usernameShowBox = document.getElementById('loggedInUser')
function showWelcomeMsg(username) {
    welcomeBox.style.display = 'block'
    usernameShowBox.innerHTML = username
}

function clearInput() {
    usernameBox.value = ''
    passwordBox.value = ''
}

// load data before unload page 
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('dataUsers', JSON.stringify(manageUserBox.getDataUsers()))
    // clear dataUsers
    dataUsers = []
})

// load data after load page
window.addEventListener('load', () => {
    const dataUsersFromSessionStorage = sessionStorage.getItem('dataUsers')
    if (dataUsersFromSessionStorage) {
        const loadDataUsers = JSON.parse(dataUsersFromSessionStorage)
        loadDataUsers.forEach(({user, setting}) => {
            const loadedUser = manageUserBox.addUser(user.username, user.password)
            loadedUser.setSetting(setting.bgColor, setting.fontColor)
        })
    }
})
