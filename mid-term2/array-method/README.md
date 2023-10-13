# **Array Method**
    
```jsx
const keywords = ['destructuring', 'spread', '3BB', "True Corp", "AIS", "DTAC"]
```
    
- `forEach()`: ไม่มีการ return ค่าใด ๆ

    ```jsx
    keywords.forEach((keyword, index) => {
        console.log(`${index + 1}. ${keyword}`)
    })

    Output:
    1. destructuring
    2. spread
    3. 3BB
    4. True Corp
    5. AIS
    6. DTAC
    ```
        
- `fliter()`: สร้าง array ใหม่และส่งค่าเฉพาะที่มีเงื่อนไขตรงตามที่ระบุ

    ```jsx
    let newKeywordsSet = keywords.filter(keyword => keyword.includes('T'))
    console.log(newKeywordsSet)

    Output:
    [ 'True Corp', 'DTAC' ]

    let keywordWithMoreFour = keywords.fliter(keyword => keyword.length > 4)
    console.log(keywordWithMoreFour)

    Output:
    [ 'destructuring', 'spread', 'True Corp' ]
    ```
        
- `map()`: สร้าง array ใหม่และคืนค่าครบทุก element

    ```jsx
    const array = [1, 3, 6, 16]
    const map1 = array.map(x => x * 2)

    console.log(map1) // [2, 6, 12, 32]
    ```

    - และสามารถเข้าถึง “บาง” element ใน property ได้

    ```jsx
    const persons = [
            { id: 1, name: 'Jake'},
            { id: 2, name: 'John'},
            { id: 3, name: 'Sun'}
    ]

    const namePersons = persons.map(person => person.name)
    console.log(namePersons) // ['Jake', 'John', 'Sun']
    ```
            
- `find()`: **หาค่าแรก**ใน array ที่ตรงกับเงื่อนไข
    - ถ้าหาค่าตามเงื่อนไขไม่เจอจะ return เป็น `undefined`

    ```jsx
    const array6 = [5, 12, 8, 130, 44]
    const found = array6.find(element => element > 10)
    console.log(found) // 12
    ```
        
- `findIndex()`: **หา index แรก**ใน array ที่ตรงกับเงื่อนไข
    - ถ้าหาค่าตามเงื่อนไขไม่เจอจะ return `-1`

    ```jsx
    const array6 = [5, 12, 8, 130, 44]
    const found = array6.find(element => element > 13)
    console.log(found) // 3
    ```
        
- `every()` & `some()`: จะเข้าไป**ดูทุก element ใน array**, return `boolean`
    - every(): ถ้าทุกตัวใน element ตรงกับเงื่อนไข จะ return `true`
    - some(): ถ้าอย่างน้อย 1 ตัวใน element ตรงกับเงื่อนไข จะ return `true`

    ```jsx
    const fruits = ['apple', 'mango', 'orange', 'pineapple']
    const lowels = ['a', 'e', 'i', 'o', 'u']
    let startWithVowel = fruits.every(fruit => { // false
    // let startWithVowel = fruits.some(fruit => { // true
        for (let lowel of lowels) {
    if (fruit[0].toLowerCase() === lowel) return true
        }
        return false
    })
    console.log(startWithVowel)
    ```
        
- `reduce()`

    ```jsx
    const nums = [5, 4, 100, -1, 0, 2, 19]
    const total = nums.reduce((total, current) => total + current)
    console.log(total)

    const fruits = ['apple', 'mango', 'orange', 'pineapple']
    const resultFruit = fruits.reduce((firstChar, fruit) => firstChar.concat(fruit.charAt(0)), '')
    console.log(resultFruit)

    const nums2 = [1, 2, 3, 4, 5]
    const multiNums2 = nums2.reduce((result, currentNum) => result * currentNum, 1)
    console.log(multiNums2)
    ```
        
- Stack and Queue Methods
    - all methods return `new length` of that array
    - `push()`: add new one or more element in the lastest of an array (ต่อท้ายของ array)
    - `pop()`: remove element in lastest of an array (ลบจากตัวสุดท้ายของ array)
    - `shift()`: remove element from first of an array (ลบจากตัวหน้าสุดของ array)
    - `unshift()`: add new element to first index of an array (เพิ่มจากตัวหน้าสุดของ array)

    ```jsx
    const fruits = ['apple', 'mango', 'orange', 'pineapple']
    // push()
    fruits.push('banana', 'grape')
    console.log(fruits) // [ 'apple', 'mango', 'orange', 'pineapple', 'banana', 'grape' ]

    // pop()
    const popFruit = fruits.pop()
    console.log(popFruit) // grape
    console.log(fruits) // [ 'apple', 'mango', 'orange', 'pineapple', 'banana' ]

    // shift()
    const shiftFruit = fruits.shift()
    console.log(shiftFruit) // apple
    console.log(fruits) // [ 'mango', 'orange', 'pineapple', 'banana' ]

    // unshift()
    fruits.unshift('apple')
    console.log(fruits) // [ 'apple', 'mango', 'orange', 'pineapple', 'banana' ]
    ```
        
- Subarray Methods
    - `splice()` → splice(`start`, `deleteCount`, `<value> or <element>`)
        - change content of an array by `remove` or `replace` and/or `add new elements` in place
        - `start`: index at which to start changing array
        - `deleteCount`: if value is `0` or `negative`, no elements are removed
            
        ```jsx
        const fruits = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']

        // remove
        const removeElement = fruits.splice(1, 2)
        console.log(removeElement) // [ 'mango', 'orange' ]
        console.log(fruits) // [ 'apple', 'pineapple', 'banana', 'grape' ]

        // add splice
        const addElement = fruits.splice(2, 0, 'mango', 'rambutant')
        console.log(addElement) // []
        console.log(fruits) // [ 'apple', 'pineapple', 'mango', 'rambutant', 'banana', 'grape' ]

        //splice with replace
        const replaceFruit = fruits.splice(2, 1, 'mangosteen')
        console.log(replaceFruit) // [ 'mango' ]
        console.log(fruits) // [ 'apple', 'pineapple', 'mangosteen', 'rambutant', 'banana', 'grape' ]
        ```

    - `slice():` → slice(`begin`, `end`)
        - `begin` use index of an array
        - `end` : index before
        - if `begin and end` is negative will start from lastest of an array
        - เริ่มตรงนั้น จบ
        - `slice()` method return `new array`
            
        ```jsx
        const fruits = [ 'apple', 'mango', 'orange', 'pineapple', 'banana' ]

        console.log(fruits.slice(1)) // [ 'mango', 'orange', 'pineapple', 'banana' ]
        console.log(fruits.slice(1, 3)) // [ 'mango', 'orange' ]
        console.log(fruits.slice(-2)) // [ 'pineapple', 'banana' ]
        console.log(fruits.slice(-3, -1)) // [ 'orange', 'pineapple' ]
        console.log(fruits.slice(-3, -2)) // [ 'orange' ]
        console.log(fruits.slice()) // [ 'apple', 'mango', 'orange', 'pineapple', 'banana' ]
        ```
            
    - `fill()` → fill(`value`, `start`, `end`)
        - `start` and `end` ไม่จำเป็นต้องใส่เสมอ
        - `start` : start at start index
        - `end` : end at end-1 index
        - return modified array
            
        ```jsx
        const nums = [1, 2, 3, 4, 5]
        console.log(nums.fill(0)) // [ 0, 0, 0, 0, 0 ]
        console.log(nums.fill(1, 1)) // [ 0, 1, 1, 1, 1 ]
        console.log(nums.fill(2, 2, 4)) // [ 0, 1, 2, 2, 1 ]
        ```
            
- Searching and Sorting Methods
    - `includes()` → includes(`element`, `fromIndex`)
        - find element in array
        - return `boolean`
        - for array → visit and check array element
        - for String → visit and check subString

        ```jsx
        const fruits = ['apple', 'mango', 'orange', 'pineapple', 'banana', 'grape']
        console.log(fruits.includes('orange')) // true
        console.log(fruits.includes('Orange')) // false
        console.log(fruits.includes('orange', 3)) // false
        ```
            
    - `indexOf()` → indexOf(`element`, `fromIndex`)
        - find index of that element in array
        - return index of that element in array
        - if not found, return -1

        ```jsx
        const fruits = ['apple', 'banana', 'cherry', 'date', 'apple'];

        const cherryIndex = fruits.indexOf('cherry');
        console.log('Index of "cherry":', cherryIndex); // 2

        const grapeIndex = fruits.indexOf('grape');
        console.log('Index of "grape":', grapeIndex); // -1

        const secondAppleIndex = fruits.indexOf('apple', 1);
        console.log('Index of second "apple":', secondAppleIndex); // Outputs: 4
        ```
            
    - `reverse()`
        - ไม่จำเป็นต้องหาตัวแปรมาเก็บ เพราะ reverse จะเข้าไป edit original array เลย

        ```jsx
        console.log(fruits.reverse()) // [ 'grape', 'banana', 'pineapple', 'orange', 'mango', 'apple' ]
        console.log(fruits) // [ 'grape', 'banana', 'pineapple', 'orange', 'mango', 'apple' ]
        ```

    - `sort()`
        - sort follow `ASCII Table` (uppercase -> lowercase)
            - a - z: 97 - 122
            - A - Z: 65 - 90

        ```jsx
        const animals = ['ant', 'dogs', 'cats', 'Bird']
        console.log(animals.sort()) // [ 'Bird', 'ant', 'cats', 'dogs' ]
        ```

        - sort by compare or Use Callback function

        ```jsx
        const persons = [ 
            {id: 1, fullName: 'Susan Jo', age: 20},
            {id: 3, fullName: 'Jake Jo', age: 30},
            {id: 2, fullName: 'anna Jo', age: 25},
            {id: 5, fullName: 'brick Jo', age: 65},
            {id: 4, fullName: 'Bird Jo', age: 46}
        ]

        console.log(persons)
        // sort by id (ascending order)
        console.log(persons.sort((a, b) => a.id - b.id))

        // compare by name
        console.log(persons.sort((a, b) => {
            if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) return 1
            if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) return -1
            return 0
        }))
        ```

        - หลักการ Sort
            - function จะ return 3 ค่าเสมอ คือ `positive value`, `negative value`, and `0`
            - `positive`: ทำการสลับตำแหน่งของ `a` และ `b` ในกรณที่ `a` อยู่ทางด้านซ้ายของ `b`
            - `negative`: ทำการสลับตำแหน่งของ `a` และ `b` ในกรณที่ `a` อยู่ทางด้านขวาของ `b`
            - `0`: ไม่มีการสลับตำแหน่ง ทั้งสองค่าอยู่ที่ตำแหน่งเดิม
    - `concat()`
        - เป็นคำสั่ง Javascript ES5
        - ใช้ในการรวม Array หรือ String
        - สามารถรวมได้หลาย ๆ Array
- `join()`
    - Create and return new String by concat all of elements in array
        - เมื่อสร้างจะมีการคั่นแต่ละ element ด้วย `","` (comma) → Default Value
        - สามารถเปลี่ยนวิธีการคั่นด้วยการใส่ pattern ไว้ใน `()`
    
    ```jsx
    const elements = ['Fire', 'Air', 'Water']
    console.log(elements.join()) // "Fire,Air,Water"
    console.log(elements.join(' ')) // "Fire Air Water"
    ```