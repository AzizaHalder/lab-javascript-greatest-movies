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
  } else {
    const totalScore = movies.reduce(function (total, currentValue) {
      return total + currentValue.score;
      const averageRating = totalScore / moviesArray.length.toFixed(2);
    });
  }
  //   const totalScore = moviesArray.reduce(function (total, currentValue) {
  //     return total + currentValue.score;
  //   }, 0);
  //   const averageRating =
  //     totalScore / moviesArray.length.Math.round(Number * 100) / 100;
  //   return averageRating;

  //   let myArray = moviesArray.reduce(function (total, current) {
  //     console.log(total + current.score);
  //     return total + current.score;
  //   }, 0);
  //   console.log(myArray);
  //   if (moviesArray.score.length === []) {
  //     return 0;
  //   } else {
  //     const totalScore = moviesArray.reduce(function (total, currentValue) {
  //       return total + currentValue.score;
  //     }, 0);
  //     const averageRating = totalScore / moviesArray.length.toFixed(2);
  //   }
  //   return averageRating;

  //   const movieScoreAvg = moviesArray.reduce(function (total, current) {
  //     return total + current;
  //   }, 0);
  //   //   return movieScoreAvg;
  //   const moviesAverage = movieScoreAvg / moviesArray.length;
  //   return moviesAverage;

  //   const averageRating = moviesArray.reduce(function (total, currentValue) {
  //     return (total + currentValue.score) / moviesArray.length;
  //   });
  //   return averageRating;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
