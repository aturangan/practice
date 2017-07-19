//O(n) time 
//O(n) space because the array we're creating is only as big as the input array
//brute force version is 2 for loops

function productOfIntegers(arg) {
  let results = []; 
  let product = 1; 
  
  for (let i = 0; i < arg.length; i++) {
    results.push(product); 
    product *= arg[i]; 
  }
  
  product = 1; 
  
  for (let i = arg.length - 1; i >= 0; i--) {
    results[i] *= product; 
    product *= arg[i]; 
  }
  return results; 
}

productOfIntegers([1, 2, 6, 5, 9]);