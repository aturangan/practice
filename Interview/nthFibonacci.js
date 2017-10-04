//given a function fib, return the nth fibonacci number 

//iterative solution, O(n) time & O(1) space
let fib = (n) => {
  if (n < 0) {
    throw new Error('That number is negative'); 
  } else if (n === 0) {
    return 0; 
  } else if (n === 1) {
    return 1; 
  }
  
  let prevprev = 0; 
  let prev = 1; 
  let current; 
  
  for (let i = 1; i < n; i++) {
    current = prev + prevprev; 
    prevprev = prev; 
    prev = current; 
  }
  
  return current; 
};

//recursive solution 
//O(n) Space
let fib = (n) => {
  if (n === 0) {
    return 0; 
  } else if (n === 1) {
    return 1; 
  }

  return fib(n - 1) + fib(n - 2); 
};
