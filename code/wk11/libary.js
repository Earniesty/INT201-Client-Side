class Library {
    constructor() {
        this.books = []
    }

    getAllBooks() {
        return this.books
    }

    addBook(title, author, year, genre) {
        if (!title || !author || !year || !genre) return undefined
        if (this.books.length > 0) {
            for (const book of this.books) {
                if (book.title?.toLowerCase() === title?.toLowerCase() &&
                this.author?.toLowerCase() === author?.toLowerCase()) return undefined
            }
        }
        const newBook = {
            title,
            author,
            year,
            genre
        }
        this.books.push(newBook)
        return newBook
    }

    updateBook(title, updateDetail) {
        const findIndex = this.books.findIndex(({title:findTitle}) => findTitle.toLowerCase() === title.toLowerCase())
        if (findIndex === -1) return undefined
        const updateBook = {
            title,
            ...updateDetail
        }
        this.books[findIndex] = updateBook
        return updateBook
    }

    deleteBookByTitle(title) {
        const deleteIndex = this.books.findIndex(({title:findTitle}) => findTitle.toLowerCase() === title.toLowerCase())
        if (deleteIndex === -1) return `not found ${title}`
        this.books.splice(deleteIndex, 1)
        return `delete "${title}" sucess`
    }
}

module.exports = {Library}