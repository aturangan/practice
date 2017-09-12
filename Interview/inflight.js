let flightLength = 5; 
let movieLengths = [1, 4, 2, 3];

let inflight = (flightLength, movieLengths) => {
  let movieTimes = {}; 

  if (flightLength <= 0) return 0; 

  for (let i = 0; i < movieLengths.length; i++) {
    let current = movieLengths[i]; 
    
    if (current <= 0) continue; 

    if (movieTimes.hasOwnProperty(current)) {
      movieTimes[current]++; 
    } else {
      movieTimes[current] = 1; 
    }
  }

  for (let time in movieTimes) {
    let complement = flightLength - time; 
    
    movieTimes[time]--; 

    if (movieTimes.hasOwnProperty(complement) && (movieTimes[complement] >= 1)) {
      if (complement !== time) {
        return true; 
      }
    }
  }

  return false; 
};

inflight(flightLength, movieLengths); 

