import { User } from "./user.js"
import { Setting } from "./setting.js"

class DataUser {
    constructor(user, setting) {
        this.user = user
        this.setting = setting
    }

    getUser() {
        return this.user
    }

    getSetting() {
        return this.setting
    }

    getDataUser() {
        return {user: this.user, setting: this.setting}
    }

    setSetting(bgColor, fontColor) {
        this.setting = new Setting(bgColor, fontColor)
    }
}

function manageUser() {
    /*
    dataUsers = [
            {
                users: {id, username, password}, 
                setting:{bgColor, fontColor}
            }, 
            ....
        ]
    */
    let dataUsers = []

    function addUser(username, password) {
        const user = new User(username, password)
        const setting = new Setting()
        const dataUser = new DataUser(user, setting)
        dataUsers.push(dataUser)
        return dataUser
    }

    function findUser(searchUsername) {
        return dataUsers.find(({user}) => user.username.toLowerCase() === searchUsername.toLowerCase())
    }

    function findIndexUser(searchUsername) {
        return dataUsers.findIndex(({user}) => user.username.toLowerCase() === searchUsername.toLowerCase())
    }

    function removeUser(removeUsername) {
        dataUsers = dataUsers.filter(({user}) => user.username.toLowerCase() !== removeUsername.toLowerCase())
    }

    function getDataUsers() {
        return dataUsers
    }

    function getNumberOfUsers() {
        return dataUsers.length
    }

    return {
        addUser,
        findUser,
        findIndexUser,
        removeUser,
        getDataUsers,
        getNumberOfUsers
    }
}

export {manageUser}