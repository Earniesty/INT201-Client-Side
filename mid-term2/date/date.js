const now = new Date() // Creates a Date object representing the current date and time
console.log(now)

const year = now.getFullYear()
const month = now.getMonth() // Months are 0-based (0 = January)
const day = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()

console.log(`Current Date and Time: ${year}-${month + 1}-${day} ${hours}:${minutes}:${seconds}`)

const futureDate = new Date(now.getTime() + 1000 * 60 * 60 * 24); // Adding one day
console.log(`Future Date: ${futureDate.toDateString()}`);

const startTime = new Date('2023-01-01T00:00:00');
const endTime = new Date('2023-12-31T23:59:59');
const timeDiff = endTime - startTime; // Result is in milliseconds
const daysDiff = timeDiff / (1000 * 60 * 60 * 24); // Convert to days
console.log(`Days between: ${daysDiff}`);
