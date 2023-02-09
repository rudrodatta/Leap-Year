const movieList = [
  {
    title: "star wars episode 7",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 8.7
  },
  {
    title: "The Matrix Revolutions",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 6.7
  },
  {
    title: "Omen ",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 6.7
  },
  {
    title: "Gladiator",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 8.5
  },
  {
    title: "The Patriot",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 7.1
  },
  {
    title: "The Matrix Reloaded",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 7.2
  }
];
// Get movie titles
const titles = [];
for (const movie of movieList) {
  titles.push(movie.title);
}
console.log(titles);

const nolanMovieList = [];
for (const movie of movieList) {
  if (movie.director === "Christopher Nolan") {
    nolanMovieList.push(movie);
  }
}
console.log(nolanMovieList.length);

const bestTitles = [];
for (const movie of movieList) {
  if (movie.imdbRating >= 7.5) {
    bestTitles.push(movie.title);
  }
}
console.log(bestTitles);

let ratingSum = 0;
let averageRating = 0;
for (const movie of nolanMovieList) {
  ratingSum += movie.imdbRating;
}
averageRating = ratingSum / nolanMovieList.length;
console.log(averageRating);