# Topic
## Recap
- [String practice](../mid-term1/objectAndArray/array/string.js)
## Object
- **Object basic** [(in mid-term 1)](/mid-term1/objectAndArray/object/README.md)
- **[Object Literal](./Object/literal.js)**
    - คือ Object ที่เก็บข้อมูลในรูปแบบของ Key/Values
- **Function in Object** 
    - **Object.keys(object):** จะแสดงที่มีทั้งหมดใน Object นั้นออกมาเป็น String in Array (หากเป็น **Composite object** จะไม่แสดง key ภายในออกมา)
    - **Object.values(object):** จะแสดง value ทั้งหมดใน object นั้นออกมา (**Composite object** ก็สามารถดึงออกมาแสดงได้)
    - **Object.entries(object):** จะเข้าไปอ่าน key and value ทั้งหมดใน object and composite object
    - **typeof** ของทั้ง keys, values, and entries is `object`
    - **function in object:**
        ```jsx
        ใช้ได้ทั้ง
        function() {}
        and 
        function: () => {}
        ```
- **Composite object (Nested Object)**
    - คือ Object ที่อยู่ภายใน Object อีกที สามารถเรียกออกมาด้วย key ที่ระบุและต้องไล่มาตามหัว key
- **Getter, Setter, new and delete property**
    - **Getter:** มีวิธีการเรียกอยู่ 2 วิธี
        ```jsx
        object.key
        object['key']
        ```
    - **Setter:** ทำเหมือน G`etter แล้วทำการกำดหนดค่า
        ```jsx
        object.key = value
        object['key'] = value
        ```
    - **New Property:** สร้าง keys ขึ้นมาใหม่พร้อมกับกำหนด value
    - **Delete Property:** เลือกลบ property โดยการเรียก key ของ property ที่ต้องการ
        ```
        delete object.key
        ```
- **Check Object**
    ```jsx
    console.log(Object.prototype.isPrototypeOf(object))
    console.log(object.hasOwnProperty('key')) 
    // both return boolean
    ```
- **[Constructor functions](./Object/construtorFN.js)**
- **[ES6 Classes](./Object/es6.js)**
    - ถูกพัฒนาให้ดีขึ้นมาจาก construtor class because method in class can be use  inheritance to other class (sub class)
- **[Object.create()](./Object/objectCreateAndInher.js)**
- **Compare**
    - In case use `==` or `===` not check content in object, but will check reference address of that object
    - ******************Example:******************
        
        ```jsx
        let student = {id: 1, name: 'Joe'}
        let newStudent = {id: 2, name: 'John'}
        let oldStudent = {id: 1, name: 'Joe'}
        let dupliStudent = student
        
        student == oldStudent // false
        student == dupliStudent // true
        ```
## JSON
- JSON (JavaScript Object Notation) is a `standard test-based format` for representing structure data based on js object syntax
- ภาษาใด ๆ ก็สามารถเข้าถึง JSON ได้
    
    ```jsx
    const obj1 = {}
    const obj2 = {id: 1}
    
    console.log(JSON.stringify(obj1)) // return string => {}
    console.log(JSON.stringify(obj2)) // return string => {"id": 1}
    
    function isEmpty(obj) {
        return JSON.stringify(obj) === '{}'
    }
    
    console.log(isEmpty(obj1)) // true
    console.log(isEmpty(obj2)) // false 
    
    const obj3 = obj2
    const obj4 = { ...obj2 } // copy content from obj2 to obj4, not reference
    
    console.log(obj3 === obj4) // false
    ```