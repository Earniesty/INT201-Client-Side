const {Library} = require('./libary.js')
const {City} = require('./city.js')

const library = new Library()

console.log(library.addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction'))
console.log(library.addBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'))
console.log(library.addBook('Moby-Dick', 'Herman Melville', 1851, 'Adventure'))

console.log(library.getAllBooks())

console.log(library.updateBook('The Great Gatsby', { author: 'Ernest Hemingway' }))

console.log(library.deleteBookByTitle('Moby-Dick'))
// Should delete the book 'Moby-Dick' from the library.

console.log(library.addBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'))
// Should return undefined since a book with the same title and author already exists.

console.log(library.addBook('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 1997))
// Should return undefined since the genre is missing.

console.log(library.updateBook('The Catcher in the Rye', { year: 1951 }))
// Should return undefined since 'The Catcher in the Rye' is not in the library.

console.log(library.deleteBookByTitle('The great gatsby'))

const city = new City()

console.log(city.listAllBuildingCity())
console.log(city.addBuilding(library))
console.log(city.addBuilding(library))
console.log(city.listAllBuildingCity())