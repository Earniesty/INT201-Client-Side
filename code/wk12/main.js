// select the first node with its node
const ulStudents = document.getElementById('students')
console.log(ulStudents)

// select the first node with CSS selector
const divStudent = document.querySelector('#students')
console.log(divStudent)
const coursesStudent = document.querySelector('.courses')
console.log(coursesStudent)

// querySelector can input multi CSS selector
const jsProgrammming = document.querySelector(
    '#int201, .courses'
)
// const jsProgrammming = document.querySelector(
//     '#int201',
//     '.courses'
// )
console.log(jsProgrammming)

const ulEle = document.querySelector('ul[id="students"]')
console.log(ulEle)

// select a collection of specified condition
const programmingLect = document.getElementsByClassName('programming')
console.log(programmingLect)
console.log(programmingLect.length)

const ulTagName = document.getElementsByTagName('ul')
console.log(ulTagName)

// Return //NodeList data type - array-like (can use index, length) 
// but NodeList implements only forEach but can not use other array functions
const coursesEle = document.querySelectorAll('courses')

const divEle = document.getElementById('bscit-courses')
const courseUnderDiv = divEle.querySelectorAll('.courses')
console.log(courseUnderDiv)

const programmingLecture = document.querySelectorAll('.programming')
console.log(programmingLecture)
console.log('Here')
programmingLecture.forEach((p1) => {
    console.log(p1)
    console.log(p1.nodeName)
    console.log(p1.nodeType)
    console.log(p1.nodeValue)
    console.log(p1.attributes) // get all attributes of element
    // -> NameNodeMap does not implement foreach
    Array.from(p1.attributes).forEach((attr) => console.log(attr))
})

const ulElement = document.getElementsByTagName('ul')
// return HTMLCOllection -array-like, not implement forEach
// -> 
Array.from(ulElement).forEach((ul) => console.log(ul))

const exampleElement = document.getElementById('exampleElement')
console.log(exampleElement.innerText)
console.log(exampleElement.innerHTML)
console.log(exampleElement.textContent)

// CRUD on any element node
// step 1. create element, <li></li>
const newLiElement = document.createElement('li')
// step 2. create attributes
newLiElement.setAttribute('name', 'devopsLect')
newLiElement.setAttribute('class', 'devops')
// step 3. add text value of eleement
newLiElement.innerHTML = '<span style="color: red">Siam Yamsangsung</span>'
// step 4. add new li element to parent node
const divParent = document.querySelector('div.lecturers>ul')
console.log(divParent)
divParent.appendChild(newLiElement) // C
const liNode = document.querySelectorAll('div.lecturers>ul>li')
console.log(liNode)
const refNode = liNode[1]
console.log(refNode)
// divParent.insertBefore(newLiEle, refNode)
divParent.replaceChild(newLiElement, refNode)
divParent.removeChild(newLiElement)

// window.alert, window.prompt, window.confirm
window.alert('Do you want to exit')

const userName = window.prompt('Please enter your name', 'ex. Somchai Jaidee')

const isExit = window.confirm(`Goodbye, ${userName}`)
console.log(isExit)
