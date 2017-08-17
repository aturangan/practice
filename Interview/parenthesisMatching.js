const parenthesisMatching = (string, first) => {
  const secondParen = ')'; 
  let index = 0; 
  
  for (let i = first; i < string.length; i++) {
    if (string[i] === secondParen) {
      index = i; 
    }
  }
  
  return index; 
};

parenthesisMatching(string, 10); 