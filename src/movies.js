// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorNames = moviesArray.map(function (name) {
    return name.director;
  });

  return directorNames;
}
// console.log(getAllDirectors(movies));
// why doesn't this console log work!!!

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaFilms = moviesArray.filter((film) => {
    return film.director === "Steven Spielberg" && film.genre.includes("Drama");
  });

  return dramaFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce(function (total, currentValue) {
    // console.log(total + currentValue.score);
    return total + currentValue.score;
  }, 0);

  const movieNumber = moviesArray.length;
  const averageScore = totalScore / movieNumber;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // turn into arrow function
  const dramaMovies = moviesArray.filter(function (film) {
    return film.genre.includes("Drama");
  });

  if (!dramaMovies.length) {
    return 0;
  }

  const dramaAverage = dramaMovies.reduce(function (total, currentValue) {
    return total + currentValue.score;
    // turn into arrow function
  }, 0);

  return Number((dramaAverage / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const movieYearOrder = moviesArray.map(function (value) {
    return value;
  });
  movieYearOrder.sort((a, b) => a.year - b.year);
  return movieYearOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesAlphabetical = moviesArray.map(function (value) {
    return value;
  });
  moviesAlphabetical.sort((a, b) => a.title - b.title);
  //   console.log(moviesAlphabetical);
  return moviesAlphabetical.slice(0, 21);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
