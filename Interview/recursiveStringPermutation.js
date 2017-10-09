function getPermutations(string) {
  if (string.length <= 1) {
    return new Set(string);
  }

  let allCharsExceptLast = string.slice(0, -1); 
  let lastChar = string[string.length - 1]; 

  let permutations = getPermutations(allCharsExceptLast);

  let finalPermutations = new Set(); 

  permutations.forEach((tempPermutation) => {
    for (let i = 0; i < allCharsExceptLast.length; i++) {
      let permutation = tempPermutation.slice(0, i) + lastChar + tempPermutation.slice(i); 
      finalPermutations.add(permutation);
    }
  });

  return finalPermutations; 
}