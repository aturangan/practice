var myArray     = [3, 4, 6, 10, 11, 15];
var alanasArray = [1, 5, 8, 12, 14, 19];

//check which array has the longer length 
//iterate and check each array to see which number comes next 
//O(n) time complexity, O(n) space complexity (or is it O(log n) ??? CHECK THIS)

let mergeArrays = (myArray, alanasArray) => {
  let merged = []; 

  let currentMergedIndex = 0; 
  let myArrayIndex = 0; 
  let alanasArrayIndex = 0;

  while (currentMergedIndex < (myArray.length + alanasArray.length)) {
    
    let isMyArrayExhausted = myArrayIndex >= myArray.length; 
    let isAlanasArrayExhausted = alanasArrayIndex >= alanasArray.length; 

    if (!isMyArrayExhausted && (isAlanasArrayExhausted || 
      myArray[myArrayIndex] < alanasArray[alanasArrayIndex])) {
      
      merged[currentMergedIndex] = myArray[myArrayIndex];
      myArrayIndex++; 
    
    } else {
      merged[currentMergedIndex] = alanasArray[alanasArrayIndex];
      alanasArrayIndex++; 
    }

    currentMergedIndex++; 
  } 

  return merged; 
};