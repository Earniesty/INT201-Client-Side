# Storage
- [wk14](/code/wk14/main.js)
---
- ประเภทของ Storage
    - HTTP Cookies
    - Web Storage
        - Session Storage
        - Local Storage
    - IndexedDB (ยากไป, ไม่เรียน, ไม่สอน)
- `Cookies` vs `Session Storage` vs `Local Storage`

    | Cookies | Session Storage | Local Storage |
    | --- | --- | --- |
    | Different expiration dates depending on set up expiration date | Data is gone when you close browser | Has no expiration date |
    | Client and Server | Client Only | Client Only |
    | Data are tranferred on each HTTP request | Data are not tranferred on each HTTP request | Data are not tranferred on each HTTP request |
    | 4 kb | 5 mb limit | 5 mb limit |
    | can access by third-party |  |  |
- Attributes
    - HttpOnly → js can’t read, ถ้าอ่านจะได้ `String: null`
    - Secure → ถ้าเลือก attributes นี้ตอนสร้าง cookies, cookies จะส่งค่าก็ต่อเมื่อ website นั้นเป็น HTTPS
- Cookies [Example API](/code/wk14/cookieUtil.js)
    - ช่วยเพิ่มประสบการณ์ในการใช้งานให้กับ user
    - Basic Code to set
        
        ```jsx
        set-Cookie: Name=VALUE; expires=DATE; path=PATH; domain=DOMAIN_NAME; secure; HttpOnly
        
        // in js (example)
        document.cookie = 'username=Fame;domain=example.com;path=/'
        ```
        
    - Cookie types
        - First-party cookies
        - Third-party cookies
    - `encodeURIComponent("String Statement")` → ใช้ในการ encode ข้อความ, หรือก็คือพวกอักขระพิเศษจะถูกแปลงให้เป็นลักษณะอื่นๆ เช่น `/ → %2F`
    - `decodeURIComponent('url')` → แปลง text ที่ถูก encode ให้กลับมาเป็นข้อความปกติ
- `sessionStorage` and `localStorage`
    - `setItem(keyName, keyValue)`
    - `getItem(keyName)`
    - `removeItem(keyName)`
    - `clear()` → clear all keys