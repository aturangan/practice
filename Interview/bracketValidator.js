//O(n) Time and Space

let bracketValidator = (string) => {
  const brackets = '(){}[]'; 
  let stack = []; 
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i]; 
    let bracePosition = brackets.indexOf(char);
    
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