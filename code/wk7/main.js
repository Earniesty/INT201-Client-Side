const student = {
    id: '001',
    name: 'Jake',
    grade: 2.78
}

// ---------------------------------
// let id = student.id              |
// let name = student.name          |
// let grade = student.grade        |
// ---------------------------------
// ^v is the same as v^
const {id, name, grade} = student

console.log(id)
console.log(name)
console.log(grade)

// const mail = {
//     sender: 'SIT, KMUTT',
//     recipient: 'Phuwamet',
//     title: 'Welcome to SIT',
//     sentDate: new Date(Date.now())
// }
const mail = {
    sender: 'SIT, KMUTT',
    recipient: {
        firstName: 'Phuwamet',
        lastName: 'Panjachalermrat'
    },
    title: 'Welcome to SIT',
    sentDetails: {
        sentDate: new Date(Date.now()),
        host: {
            name: '@sit.kmutt.ac.th'
        }
    }
}

let { recipient: {firstName, lastName} } = mail
let {sentDetails: {host: {name: hostName}}} = mail
let { recipient } = mail
// let { sentDate, title } = mail
let { sentDetails: {sentDate}, title:header } = mail
// ให้ผลลัพธ์เหมือนเดิม เพียงแต่สามารถเปลี่ยนชื่อได้
// สำคัญชื่อต้องตรงกับ key ใน object

console.log(recipient)
console.log(firstName)
console.log(lastName)
console.log(sentDate)
console.log(header)
console.log(hostName)

