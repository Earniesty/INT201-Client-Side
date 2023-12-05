# Event
- [wk13](/code/wk13/main.js)
---
- listeners (also called `handlers` )
- call model called `observer pattern`

### Event Flow concept

- Event Bubbling Flow → ส่งต่อเหตุการณ์ตาม parent node
- Event Capturing Flow → จะเริ่มไล่จาก root node, จะเริ่มจาก node ที่ไกลที่สุดก่อน

```html
<html>
<head>
		<title>Event Bubbling Example</title>
</head>
<body>
		<div id="myDiv">Click Me</div>
</body>
</html>
```

- Event Bubbling
    
    ```html
    1. <div>
    2. <body>
    3. <html>
    4. document
    ```
    
- Event Capturning
    
    ```html
    1. document
    2. <html>
    3. <body>
    4. <div>
    ```

---

### Three Phase Event Flow

when event is fired on an element that has parent elements, modern browsers run three different phases

1. capturing phase
2. target phase
3. bubbling phase

---

### Way of using web event

1. Event Handlers Properties → ไม่แนะนำในปัจจุบัน
    - คือการใช้ onclick บน tag html
2. Adding and Removing event handlers
    - callback function by use `addEventListener()` and `removeEventListener()`
        - in `addEventListener('<status>', <function>, <option:(true, false)>)` defalut of option is false
        - option false use `Bubbling Flow`
        - option true use `Capturing Flow`

---

### Event Objects (การรับ event ใน addEventListener)

- currentTarget `(Element)`
- eventPhase `(Integer)`
- preventDefault() `(Function)` → ใช้เพื่อไม่ให้ page reload or refresh
- target `(Element)`
- type `(String)`

---

### Event Types

- State change events
    - DOMContentLoaded
    - load
    - beforeunload
    - unload
    - resize
    - scroll
- Focus events
    - blur → fires when element lost focus
    - focus → fires when element received focus
- Mouse events (order)
    - mousedown
    - mouseup
    - click
    - mouseout
    - mouseover
    - mousemove
- Keyboard events
    - keydown
    - keypress
    - keyup
- Input events
    - input → fires when value of `<input>`, `<select>`, or `<textarea>` has been changed