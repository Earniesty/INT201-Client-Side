const mails = [
    {
        id: 12345,
        sender: {
            firstName: 'Phuwamet',
            lastName: 'Panjachalermrat'
        },
        subject: 'Welcome to SIT, KMUTT',
    },
    {
        id: 55325,
        sender: {
            firstName: 'Fame',
            lastName: 'Nu'
        },
        subject: 'Welcome to Hell',
    }
]
const keywords = ['destructuring', 'spread', '3BB', "True Corp", "AIS", "DTAC"]

let firstChar = ''
keywords.forEach(keyword => {
    firstChar += keyword[0]
})
console.log(firstChar)

mails.forEach(mail => {
    console.log(mail)
})

let mailIds = []
mails.forEach(mail => mailIds.push(mail.id))
console.log(mailIds)

let newKeywordsSet = keywords.filter(keyword => keyword.includes('T'))
console.log(newKeywordsSet)

let keywordWithMoreFour = keywords.filter(keyword => keyword.length > 4)
console.log(keywordWithMoreFour)

const mailsIdsByMap = mails.map(mail => `logId-${mail.id}`)
console.log(mailsIdsByMap)