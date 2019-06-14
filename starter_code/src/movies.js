/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(theMoviesArray) {

  function toMinutes(movieToChange){    

      let toChange = movieToChange.duration;
      if(toChange.length < 3) {
        let toSplit = toChange.match(/\d+/g).map(Number);
        toNumber = toSplit.reduce((a, b)=>{return a + b})
        finalHour = String(toNumber * 60)
        return finalHour;
      }else {
      let toSplit = toChange.match(/\d+/g).map(Number);
      toSplit = [(toSplit[0] * 60), toSplit[1]];
      return (toSplit.reduce((a, b)=>{return a + b}));
      }
  };

  let changeToNewArray = theMoviesArray.map((theMovie)=>{
    
    let myNewMovieObject = {};
    myNewMovieObject.title = theMovie.title
    myNewMovieObject.year = theMovie.year
    myNewMovieObject.director = theMovie.director
    myNewMovieObject.duration = toMinutes(theMovie)
    myNewMovieObject.genre = theMovie.genre
    myNewMovieObject.rate = theMovie.rate
    return myNewMovieObject
  });
  

 return changeToNewArray
};


// Get the average of all rates with 2 decimals 

function ratesAverage(movieToChange){  

  let changeToNewArray = movieToChange.map((theMovie)=>{
    
    let myNewArray = [];
 
    myNewArray = parseFloat(theMovie.rate);

    return myNewArray
  });  

  let getMyAverage = changeToNewArray.reduce((a,b)=>{
    return a + b
  });

  let almostAverage = getMyAverage / movieToChange.length
  almostAlmostAverage = almostAverage.toFixed(2);
  //ummm.....toFixed returns a string....
  finalAverage = parseFloat(almostAlmostAverage);
  return finalAverage;

};



// Get the average of Drama Movies

function dramaMoviesRate(movieToChange){  


  let changeToNewArray = movieToChange.map((theMovie, index)=>{
    
    let myNewArray = [];
    if ((theMovie.genre).includes("Drama")){
    console.log(theMovie.genre);
    myNewArray = parseFloat(theMovie.rate); //why does this return undefined elements and the console.log doesnt??????
    return myNewArray
    }
    
  });  

  console.log(changeToNewArray);

  let getMyAverage = changeToNewArray.reduce((a,b)=>{
    return a + b
  });

  let almostAverage = getMyAverage / movieToChange.length

  almostAlmostAverage = almostAverage.toFixed(2);

  finalAverage = parseFloat(almostAlmostAverage);

  return finalAverage;

};


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
