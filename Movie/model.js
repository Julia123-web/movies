const Sequelize = require("sequelize");
const db = require("../sequelize-rest.js");

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING,
    field: "movie_title"
  },
  yearOfRelease: {
    type: Sequelize.INTEGER,
    field: "movie_yearsOfRelease"
  },
  synopsis: {
    type: Sequelize.STRING,
    field: "movie_synopsis"
  }
});

// const movies1 = Movie.create({
//   title: "The mask",
//   yearOfRelease: 1994,
//   synopsis: "When timid bank clerk Stanley Ipkiss (Jim Carrey)..."
// });
// movies1.then(movie => {
//   console.log("movie", movie.get());
// });
// const movies2 = Movie.create({
//   title: "Marley and Me",
//   yearOfRelease: 2009,
//   synopsis: "Newlyweds John and Jenny Grogan (Owen Wilson, Jennifer Aniston)..."
// });
// movies2.then(movie => {
//   console.log("movie", movie.get());
// });
// const movies3 = Movie.create({
//   title: "The Notebook",
//   yearOfRelease: 2004,
//   synopsis:
//     "In 1940s South Carolina, mill worker Noah Calhoun (Ryan Gosling)..."
// });
// movies3.then(movie => {
//   console.log("movie", movie.get());
// });

module.exports = Movie;
