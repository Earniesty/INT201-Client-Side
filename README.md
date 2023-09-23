# Concept
- **[All Basic](./mid-term1/README.md)**      
- **Syntax Sugar**
    หรือเรียกอีกชื่อว่า `"syntactic sugar”` เป็นแนวคิดการเขียนโปรแกรมที่อ้างถึงคุณลักษณะในภาษาการเขียนโปรแกรมที่ช่วยลดความซับซ้อนหรือปรับปรุงความสามารถในการอ่านโค้ดชิ้นใดชิ้นหนึ่งโดยไม่ต้องเปลี่ยนฟังก์ชันการทำงานพื้นฐาน
    - **Arrow Function:**
        ```jsx
        // Traditional function expression
        const add = function (a, b) {
        return a + b;
        };

        // Arrow function
        const add = (a, b) => a + b;
        ```
    - **Template Literals:**
        ```jsx
        // Without template literals
        const message = "Hello, " + name + "!";

        // With template literals
        const message = `Hello, ${name}!`;
        ```
    - **Array and Object Destructuring:**
        ```jsx
        // Without destructuring
        const first = myArray[0];
        const second = myArray[1];

        // With destructuring
        const [first, second] = myArray;
        ```
    - **Spread Operator:**
        ```jsx
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];

        const combinedArray = [...array1, ...array2];
        ```
    - **Class Syntax:**
        ```jsx
        // Without class syntax
        function Person(name) {
            this.name = name
        }

        Person.prototype.sayHello = function () {
            console.log(`Hello, my name is ${this.name}`)
        }

        // With class syntax
        class Person {
            constructor(name) {
                this.name = name;
            }

            sayHello() {
                console.log(`Hello, my name is ${this.name}`);
            }
        }
        ```