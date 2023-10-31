//65130500066 ภูวเมศฐ์ ปัญจเฉลิมรัตน์

class Movies {
  movies = new Array()
  constructor() {
    // this.title = title
    // this.director = director
    // this.year = year
    // this.genre = genre
    // this.movies = new Array()
    // this.Movies = movies
    // this.Movies = new Array()
    // const movies = new Array()
  }

  getAllMovies() {
    return movies
  }

  addMovie(title, director, year, genre) {
    if (title != null && director != null && year != null && genre != null ) return undefined
    for (const movie of movies) {
      if (movie.title.toLowerCase() === title.toLowerCase() && 
      movie.director.toLowerCase() === director.toLowerCase()) return undefined
    }
    return movies.push()
  }

  updateMovie(title, updateDetails) {
    const findIndex = movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if (findIndex >= 0) movies.splice(findIndex, 1, {...updateDetails})
    return undefined
  }

  deleteMovieByTitle(title) {
    const deleteAtIndex = movies.findIndex((movie) => movie.title.toLowerCase() === title.toLowerCase())
    if (deleteAtIndex >= 0) {
      const deleteMovie = movies.splice(deleteAtIndex, 1)
      return `a movie object ${deleteMovie} is deleted`
    } else return `no movie deleted`
  }
}

module.exports = Movies
