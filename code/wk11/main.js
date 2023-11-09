// Common JS
// const {echo, sum, maxValue} = require('./libs/uitls.js')

// ES Module
// import {echo, maxValue, sum} from './libs/uitls.js'
import summary, {echo, maxValue} from './libs/uitls.js'

console.log(echo('Fame'))
// console.log(sum(1,2,3,4,2,1,5,1,4,2,8))
console.log(summary(1,2,3,4,2,1,5,1,4,2,8))
console.log(maxValue)
console.log(typeof maxValue)

// DOM
const rootNode = window.document
console.log(rootNode)
console.log(rootNode.nodeName) // #document
console.log(rootNode.nodeType) // 9 -> nodeType return int number of that type value
console.log(rootNode.nodeValue) // null

console.log(rootNode.documentElement)
console.log(rootNode.documentElement.nodeName)
console.log(rootNode.documentElement.nodeType)
console.log(rootNode.documentElement.nodeValue)

console.log(rootNode.body)
console.log(rootNode.body.nodeName)
console.log(rootNode.body.nodeType)
console.log(rootNode.body.nodeValue)

console.log(rootNode.head)
console.log(rootNode.head.nodeName)
console.log(rootNode.head.nodeType)
console.log(rootNode.head.nodeValue)

console.log(rootNode.title)
console.log(rootNode.title.nodeName)
console.log(rootNode.title.nodeType)
console.log(rootNode.title.nodeValue)

const headElement = document.head
console.log(headElement)

const headChildren = headElement.childNodes
console.log(headChildren) /*
NodeList(7) [text, meta, text, title, text, comment, text]
0: text
1: meta
2: text
3: title
4: text
5: comment
6: text
length: 7
[[Prototype]]: NodeList
*/

headChildren.forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})
//2. children (HTMLCollection data type) = query children wiht ELEMENT type only
//convert array-like to array before using foreach function
console.log('length:', headElement.children.length)
Array.from(headElement.children).forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})

// Parent RelationShip
// get parent incuding all node types
const headParentNode = headElement.parentNode
// get only parent element node type
const headParentElement = headElement.parentElement

console.log(headParentNode)
console.log(headParentElement)
// get previous sibling including all node types
const headPreviousSilbling = headElement.previousSibling
console.log(headPreviousSilbling)
// get previous silbing only element node type
const headPreviousSilblingElement = headElement.headPreviousSilblingElement
console.log(headPreviousSilblingElement)

// get next sibling including  all node types
const headNextSibling = headElement.nextSibling
console.log(headNextSibling)
// get next sibling only element node type
const headNextSiblingElement = headElement.nextElementSibling
console.log(headNextSiblingElement)

// get first child
console.log(headElement.firstChild)
console.log(headElement.firstElementChild)

// get last child
console.log(headElement.lastChild)
console.log(headElement.lastElementChild)