//65130500066 ภูวเมศฐ์ ปัญจเฉลิมรัตน์

class Movies {
  constructor() {
    this.movies = []
  }

  getAllMovies() {
    return this.movies
  }

  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) return undefined
    for (const movie of this.movies) {
      if (movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()) return undefined
    }
    const newMovie = {
      title,
      director,
      year,
      genre
    }
    this.movies.push(newMovie)
    return newMovie
  }

  updateMovie(title, updateDetails) {
    const findIndex = this.movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if (findIndex === -1) return undefined

    const thatMovie = {
      ...this.movies[findIndex],
      ...updateDetails
    }
    // this.movies.splice(findIndex, 1, thatMovie)
    this.movies[findIndex] = thatMovie
    return thatMovie
    // const updatedMovie = Object.assign(this.movies[findIndex], updateDetails)
    // return updatedMovie
  }

  deleteMovieByTitle(title) {
    this.movies = this.movies.filter((movie) => movie.title.toLowerCase() !== title.toLowerCase())
  }
}

module.exports = Movies
