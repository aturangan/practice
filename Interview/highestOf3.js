//Given an array of integers, find the highest product you can get from three of the integers.
//The input arrayOfInts will always have at least three integers.

let highestProduct = (integers) => {
  let highest = Math.max(integers[0], integers[1]); 
  let lowest = Math.max(integers[0], integers[1]); 
  
  let highestProductOf2 = integers[0] * integers[1]; 
  let lowestProductOf2 = integers[0] * integers[1]; 
  
  let final3 = integers[0] * integers[1] * integers[2]; 
  
  for (let i = 0; i < integers.length; i++) {
    let current = integers[i]; 
    
    final3 = Math.max(
      final3, 
      current * highestProductOf2, 
      current * lowestProductOf2
    ); 
    
    highestProductOf2 = Math.max(
      highestProductOf2, 
      current * highest, 
      current * lowest
    );
    
    lowestProductOf2 = Math.min(
      lowestProductOf2, 
      current * highest, 
      current * lowest
    );
    
    highest = Math.max(
      highest, 
      current
    ); 
    
    lowest = Math.min(
      lowest, 
      current
    ); 
  }
  
  return final3; 
};

highestProduct([-10,-10,1,3,2]);
