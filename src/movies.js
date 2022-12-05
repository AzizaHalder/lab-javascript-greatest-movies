// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorNames = moviesArray.map(function (name) {
    return name.director;
  });

  return directorNames;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaFilms = moviesArray.filter((film) => {
    return film.director === "Steven Spielberg" && film.genre.includes("Drama");
  });

  return dramaFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce(function (total, currentValue) {
    console.log(currentValue.score, currentValue.title);
    return total + (currentValue.score || 0);
  }, 0);

  const movieNumber = moviesArray.length;
  const averageScore = totalScore / movieNumber;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((film) => {
    return film.genre.includes("Drama");
  });

  if (!dramaMovies.length) {
    return 0;
  }

  const dramaAverage = dramaMovies.reduce((total, currentValue) => {
    return total + currentValue.score;
  }, 0);

  return Number((dramaAverage / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const movieOrder = moviesArray.map(function (movie) {
    return movie;
  });

  movieOrder.sort((movieA, movieB) => {
    if (movieA.year === movieB.year) {
      return movieA.title.localeCompare(movieB.title);
    }
    return movieA.year - movieB.year;
  });

  return movieOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesAlphabetical = moviesArray.map((movie) => movie.title);

  moviesAlphabetical.sort((movieA, movieB) => movieA.localeCompare(movieB));

  const top20Movies = moviesAlphabetical.slice(0, 20);
  return top20Movies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
