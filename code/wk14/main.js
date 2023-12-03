import { CookieUtil } from "./cookieUtil.js"

// document.cookie = 'usernaem=Phuwamet'
// document.cookie = 'course=INT201'
// document.cookie = 'credit=3'
// const currentCookies = document.cookie
// console.log(currentCookies)
// console.log(typeof currentCookies)
// console.log(CookieUtil.get('course'))

// CookieUtil.set('username', 'Phuwamet', new Date(2023, 11, 25))
// CookieUtil.set('course', 'INT201', undefined)
// CookieUtil.set('credit', 'Phuwamet', new Date(2024, 0, 1))

// console.log(CookieUtil.get('username'))
// console.log(CookieUtil.get('course'))

// console.log(CookieUtil.unset('credit')) // undefined
// console.log(CookieUtil.get('credit')) // ''

// local Storage
// let counter = localStorage.getItem('count')
// if (counter === null) {
//     counter = 1
//     localStorage.setItem('count', counter)
// } else {
//     localStorage.setItem('count', ++counter)
// }
// alert(`counter=${counter}`)

// session storage
// let counter = sessionStorage.getItem('count')
// if (counter === null) {
//     counter = 1
//     sessionStorage.setItem('count', counter)
// } else {
//     sessionStorage.setItem('count', ++counter)
// }
// alert(`counter=${counter}`)


const bodyArea = document.body
// const bodyArea = document.querySelector('body')
console.log(bodyArea)

const inputColor = document.getElementById('body')
console.log(inputColor)

inputColor.addEventListener('input', () => {
    let color = inputColor.value
    console.log(color)
    bodyArea.style.backgroundColor = color
})
