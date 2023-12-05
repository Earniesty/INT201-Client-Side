# JS Module
- ใช้ในการ export/import class, function, variable, or data จากไฟล์หนึ่งไปอีกไฟล์หนึ่ง
- Unpacking (with destructuring) เกริ่น
    
    ```jsx
    function getFirstName({ displayName, fullName: { firstName: fn } }) {
        return `${displayName} is ${fn}`
    }
    
    const students = {
        studentId: 64001,
        displayName: 'jsGuy',
        fullName: {
            firstName: 'Somchai',
            lastName: 'DeeJai'
        }
    }
    
    console.log(getFirstName(students))
    ```
    
- **CommonJS**
    - Node.js support
    - use `module.exports` for modules export
    - use `require()` for import modules
    
    ### CommonJS 1 Function
    
    ```jsx
    // util.js
    const display = (anyMsg) => {
    	console.log(anyMsg)
    }
    
    module.exports = { display }
    
    // useModule.js
    const { display } = require('./util.js')
    display('Hello, commonJS')
    ```
    
    ### CommonJS 2 function
    
    ```jsx
    // /lib/echo.js
    function echoMsg(msg) {
    	return msg
    }
    
    function greetingMsg(name) {
    	return `Hi , ${name}`
    }
    module.exports = { echoMsg, gereetingMsg }
    
    // /useModule.js
    const { echoMsg, greetingMsg } = require('/lib/util.js')
    console.log(echoMsg('Hello, CommonJS'))
    console.log(greetingMsg('John'))
    ```
    
- **ES Modules (INT201 - Module 2)**
    - format to package js code for reuse and most **`modern web browsers`** support the ES modules
    - use in node.js must change from `.js` to `.mjs`
    - ปกติใช้ JS ผ่าน Tag <script> จะต้องใช้ `type=”module”`
    - **export statment** ใช้เพื่อส่งออก function, objects, or primitive value จาก module หนึ่งให้สามารถนำไปใช้ได้ใน program อื่นๆ
    - 2 types of exports:
        - Named Exports (Zero or more exports per module)
        - Default Exports (One per module) - สามารถ import มาเป็นชื่ออะไรก็ได้
    - Code
        ### Export:
        
        ```jsx
        function echo(msg) {
            return `hello, ${msg}`
        }
        
        function sum(...n) {
            let total = 0
            for (const num of n) total += num
            return total
        }
        
        const maxValue = 100
        
        // ES Module
        // export {echo, sum, maxValue}
        // default export ES
        export {sum as default, echo, maxValue}
        ```
        
        ### Import:
        
        ```jsx
        // ES Module
        // import {echo, maxValue, sum} from './libs/uitls.js'
        import summary, {echo, maxValue} from './libs/uitls.js'
        
        console.log(echo('Fame'))
        // console.log(sum(1,2,3,4,2,1,4,1,4,2,8))
        console.log(summary(1,2,3,4,2,1,4,1,4,2,8))
        console.log(maxValue)
        console.log(typeof maxValue)
        ```