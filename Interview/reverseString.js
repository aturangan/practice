//O(n) time and O(1) space

let reverseInPlace = (string) => {
  let chars = string.split(''); 
  let start = 0; 
  let end = chars.length - 1; 

  while (start < end) {
    let temp = chars[start]; 
    chars[start] = chars[end]; 
    chars[end] = temp; 

    start++; 
    end--; 
  }

  return chars.join(''); 
}