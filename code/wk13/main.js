const submitButton = document.querySelector('button')
console.log(submitButton)
const doSomething = (e) => { // รับ evnet จาก addEventListener()
    // console.log('Submit clicked')
    // console.log(e)
    // console.log(e.target.nodeName)
    console.log(e.target.id)
    // console.log(e.type)
    // console.log(e.target)
    console.log(e.currentTarget)
    console.log(e.eventPhase)
}
submitButton.addEventListener('click', doSomething)

// ------------------------------------------------------------------------------
const innerDiv = document.getElementById('inner-div')
console.log(innerDiv)
innerDiv.addEventListener('click', (event) => {
    // console.log(event.target)
    console.log(event.target.id)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
})

// outerDiv
const outerDiv = document.getElementById('outer-div')
outerDiv.addEventListener('click', (event) => {
    console.log(event.target.id)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
})

// --------------------- after break time
// const submitButton = document.querySelector('button')
// const doSomething = (e) => {
//     console.log(`goodbye, ${e.target.id}`)
// }

// // add multiple handler function
// submitButton.addEventListener('click', (e) => {
//     console.log(`hello, ${e.target.id}`)
// })
// submitButton.addEventListener('click', doSomething)
// submitButton.removeEventListener('click', doSomething)

// second.html
// const submitButton = document.querySelector('button')

// submitButton.addEventListener('click', (e) => {
//     console.log(e.preventDefault()) // undefined
//     // console.log('cancle submit to server')

//     const userInput = document.getElementById('input-user')
//     const username = userInput.value.trim()

//     const pswInput = document.getElementById('input-psw')
//     const password = pswInput.value.trim()

//     const showBox = document.querySelector('div>p')
//     if (!username) showBox.innerHTML = `username empty`
//     if (!password) showBox.innerHTML = `password empty`
//     if (!password && !username) showBox.innerHTML = `username and password empty`
//     if (password && username) showBox.innerHTML = `username: ${username}, password: ${password}`
// })


// // window document
// // document.addEventListener('DOMContentLoaded', () => {
// //     console.log('Your DOM tree built')
// // })

// // window.addEventListener('load', () => {
// //     console.log('Your application loaded')
// // })

// // window.addEventListener('beforeunload', () => {
// //     localStorage.setItem('myCat', 'Tom')
// // })

// // window.addEventListener('mousemove', (e) => {
// //     console.log(`x:${e.screenX}, y:${e.screenY}`)
// // })

// const userElement = document.getElementById('input-user')
// const pswElement = document.getElementById('input-psw')

// userElement.addEventListener('focus', () => {
//     console.log('Your focus is on your username')
// })

// userElement.addEventListener('blur', () => {
//     console.log('Your username input textbox is blured')
// })

// userElement.addEventListener('keydown', (e) => {
//     console.log(`${e.key}, ${e.code}`)
//     if (e.key >= 0 && e.key <= 9) e.preventDefault()
// })

// // when user release enter key, text value on username will show at <p></p> element
// userElement.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         const pElement = document.querySelector('p')
//         pElement.textContent = e.target.value
//     }
// })

// userElement.addEventListener('input', (e) => {
//     const pElement = document.querySelector('p')
//     pElement.textContent = e.target.value
// })


