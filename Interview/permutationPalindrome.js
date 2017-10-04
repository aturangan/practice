function hasPalindromePermutation(string) {
  let set = new Set(); 

  for (let i = 0; i < string.length; i++) {
    let char = string[i]; 

    if (set.has(char)) {
      set.delete(char); 
    } else {
      set.add(char); 
    }
  }

  return set.size <= 1; 
}

// //O(n) Time, O(1) Space 
//(because there are only 128 ASCII characters)