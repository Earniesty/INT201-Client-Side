# DOM (Document Object Model)
- [wk12](/code/wk12/main.js)
--- 
- เป็นแนวคิดในการทำ model ของ file นั้นๆ → ออกมาเป็น `กราฟต้นไม้`
    - มองภาพเป็น parent tree → (parent, child, sibling(พี่น้อง), next sibling, current node, node)
- Node type ที่สำคัญ
    - Document_Node `9`
    - Element_Node `1`
    - Attributes_Node `2`→ ไม่มีความสัมพันธ์ กับ Tree DOM
    - Text_Node `3`→ กระจายอยู่จุดต่างๆในไฟล์ (white space, `Enter`)
    - Comment_Node `8`

### Node type Table

| Name | Value |
| --- | --- |
| ELEMENT_NODE | 1 |
| ATTRIBUTE_NODE | 2 |
| TEXT_NODE | 3 |
| CDTA_SECTION_NODE | 4 |
| PROCESSING_INSTRUCTION_NODE | 7 |
| COMMENT_NODE | 8 |
| DOCUMENT_NODE | 9 |
| DOCUMENT_TYPE_NODE | 10 |
| DOCUMENT_FRAGMENT_NODE | 11 |
### console
- nodeType: return int value of that type element
- nodeName: ถ้าเป็น Tag Element, จะ return tag name ของ element นั้นด้วย format `Uppercase`
- nodeValue:
    | Node | Value of nodeValue |
    | --- | --- |
    | CDATASection | Content of the CDATA section |
    | Comment | Content of the comment |
    | Document | null |
    | DocumentFragment | null |
    | DocumentType | null |
    | Element | null |
    | NamedNodeMap | null |
    | ProcessingInstruction | Entire content excluding the target |
    | Text | Content of the text node |
- Code01
    
    ```html
    <html lang="en">
        <!-- This is a sibling comment -->
    <head>
        <meta charset="UTF-8" />
        <title>Introduction to DOM</title>
        <!--This is a head comment-->
    </head>
    <body>
        <div>
            <p>Today is a <span style="color: red">present</span></p>
            <!--This is a body comment-->
        </div>
        <script type="module" src="main.js"></script>
    </body>
    </html>
    ```
    
    ```jsx
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
    ```
    

---

### Attr

- Attr node inherits from node but is not considered a part of the document tree
- like `parentNode`, `previousSibling`, and `nextSibling` are `null` for an Attr Node
- แต่ยังสามารถดึง attributes นั้นจาก `ownerElement`

```html
<div id="exampleElement" style="font-size: 10pt">
		This is some <span style="display: none">hidden</span> text content.
</div>
```

```jsx
const element = document.getElementById('exampleElement')
console.log(element.nodeType) //1
console.log(element.attributes[0]) //id="exampleElement“
console.log(element.attributes[0].nodeType) //2
console.log(element.attributes[0].value) //exampleElement
console.log(element.attributes[0].ownerElement)
// <div id="exampleElement" style="font-size: 10pt">…</div>

const divStyleAttr = element.getAttribute('style')
console.log(divStyleAttr) //font-size: 10pt
```

---

### Node Relationships

- `someNode.firstChild` = `someNode.childNodes[0]`
- `someNode.lastChild` = `someNode.childNodes[someNode.childNodes[length-1]]`
- `someNode.parentNode`
- `someNode.nextSibling`
- `someNode.previousSibling`

---

### Element Traversal

- `childElementCount` → return number of child element (excludes(ยกเว้น) text nodes and comments)
- `firstElementChild` → คล้าย `firstChild` แต่จะข้ามทุก node ที่ไม่ใช่ element (เช่น text node and comment จะไม่ถูกเลือก)
- `lastElementChild`
- `previousElementSibling`
- `nextElementSibling`

---

### HTML Collection(live) vs Nodelist(static)

- All is `Array-like collection`
- `live` example → if add `<li>` element to list in DOM, the list in Collection will also change
- `static` example → if add `<li>` element to list in DOM, the list in NodeList will not change
- Return The first element (if not found return null)
    - `getElementById()`
    - `querySelector()` → is `Node List`
- Return Collection
    - `getElementByTagName()`
    - `getElementByClassName()`
    - `children`
- Return Nodelist
    - `getElementsByName()`
    - `querySelectorAll()`
    - `childNodes`
- innerHTML, innerText, textContent
    
    ```jsx
    <div id="exampleElement">
    		this is some <span style="display: none;">hidden </span>text content
    </div>
    ```
    
    ```jsx
    const exampleElement = document.getElementById('exampleElement')
    console.log(exampleElement.innerText) // this is some text content
    console.log(exampleElement.innerHTML) // this is some <span style="display: none;">hidden </span>text content
    console.log(exampleElement.textContent) // this is some hidden text conten
    ```
    

---

### Manipulating Nodes

- `appendChild()`
- `createElement()`
- `insertBefore(newNode, refNode)` → insert become previous sibling of the reference node
- `replaceChild(newChild, oldChild)`
- `removeChild(child)`

---

### System Dialogs

- `alert()`
- `confirm()`
- `prompt()`

    ```jsx
    window.alert('Do you want to exit')

    const userName = window.prompt('Please enter your name', 'ex. Somchai Jaidee')

    const isExit = window.confirm(`Goodbye, ${userName}`)
    console.log(isExit)
    ```