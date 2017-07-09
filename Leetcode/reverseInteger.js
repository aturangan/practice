var reverse = function(x) {
  let reversed = ''; 
  let numString = x.toString(); 
  
  for (let i = numString.length - 1; i >= 0; i--) {
    reversed += numString[i]; 
  }
  
  let parsed = parseInt(reversed); 
  
  if (numString[0] === '-') {
    parsed = parseInt('-' + parsed); 
  }
  
  if (parsed >= 2147483647 || parsed <= -2147483648) {
    return 0; 
  } else {
    return parsed; 
  }
};

reverse(123); 
