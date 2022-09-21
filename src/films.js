// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(mov => mov.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter( mov => (mov.director == director));
 console.log("EXERCICE 2 ->", result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovs = getMoviesFromDirector(array, director);
  
  let totalScore = 0;
  for (let x of directorMovs){
  totalScore += x.score};

  let result = totalScore/(directorMovs.length);
  console.log("EXERCICE 3 ->", result);
  return result;


}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let fullMovs = array.map(mov => (mov.title));

  let orderedMovs = fullMovs.sort((a, b) => ((a > b) ? 1 : -1));
  let result = orderedMovs.splice(0,20)
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let fullMovs = array.map(e => ({ ...e }));
  let sorted =  fullMovs.map(item => item).sort((a,b) => (a.title > b.title)? 1 : (b.title > a.title) ? -1 :0);
	let result = sorted.sort((a, b) => {
    return a.year - b.year;});
   
   
	console.log('EXERCICE 5 ->', result);
  return result;

}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

let fullCategory = array.filter(mov => mov.genre.includes(genre) && mov.score);


let totalScore = 0;
for (let x of fullCategory){

  totalScore += x.score;}
let result = totalScore/fullCategory.length;

console.log("EXERCICE 6 ->", result);
return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
let fullMovs = array.map(e => ({ ...e }));


for (let x of fullMovs){
 let time = x.duration;
 //__________________________________________________ REGEX
 let h = Number(time.match(/\d+(?=h)/g));
 let min = Number(time.match(/\d+(?=min)/g));
  //__________________________________________________ REGEX
 let totalTime = min +(h * 60);
 x.duration = totalTime;

}

let result = fullMovs;

console.log("EXERCICE 7 ->", result);
return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

let yearMovs =  array.filter(mov => mov.year == year);
let bestMovs = yearMovs.sort((a, b) => {return b.score - a.score});
let result = [bestMovs[0]];


console.log("EXERCICE 8 ->", result);
return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
