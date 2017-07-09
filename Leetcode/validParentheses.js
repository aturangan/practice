//O(n)

var isValid = function(s) {
  const parentheses = '()[]{}'; 
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i]; 
    let bracePosition = parentheses.indexOf(current);

    if (bracePosition === -1) {
      continue; 
    } 

    if (bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); 
    } else {
      if (stack.pop() !== bracePosition) {
        return false; 
      }
    }
  }

  return stack.length === 0; 
};