
function productOfIntegers(arg) {
  let results = []; 
  let product = 1; 
  
  for (let i = 0; i < arg.length; i++) {
    results.push(product); 
    product *= arg[i]; 
  }
  console.log('first results', results); 
  
  product = 1; 
  
  for (let i = arg.length - 1; i >= 0; i--) {
    results[i] *= product; 
    product *= arg[i]; 
  }
  return results; 
}

productOfIntegers([1, 2, 6, 5, 9]);